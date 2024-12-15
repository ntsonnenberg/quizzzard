import {
  GetObjectCommand,
  HeadObjectCommand,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import fs from "fs";
import mime from "mime";

/**
 * --------------------------------------------------------
 *                      PRIVATE CONSTANTS
 * --------------------------------------------------------
 */

const bucketName = process.env.AWS_BUCKET_NAME || "";
const region = process.env.AWS_REGION || "";
const accessKeyId = process.env.AWS_ACCESS_KEY_ID || "";
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY || "";

const s3Client = new S3Client({
  region,
  credentials: {
    accessKeyId,
    secretAccessKey,
  },
});

const folders = {
  notes: "notes",
};

const acceptedFileTypes = [
  "application/pdf",
  "image/jpeg",
  "image/jpg",
  "image/png",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

/**
 * --------------------------------------------------------
 *                      PUBLIC METHODS
 * --------------------------------------------------------
 */

export const uploadNoteToS3 = async (fileName: string, filePath: string) => {
  try {
    // Parameters for S3 upload
    const params = {
      Bucket: bucketName,
      Key: `${folders.notes}/${fileName}`,
      Body: fs.createReadStream(filePath),
      ContentType: validateContentType(filePath),
    };

    // Upload file to S3
    await s3Client.send(new PutObjectCommand(params)).then(() => {
      // Delete file from local fs after upload
      if (fs.existsSync(filePath)) {
        fs.unlink(filePath, (error) => {
          if (error) {
            console.error(
              "Could not delete file from local file system:",
              error
            );
          } else {
            console.log("File deleted successfully from local file system.");
          }
        });
      }
    });

    // DELETE
    const metadata = await s3Client.send(
      new HeadObjectCommand({
        Bucket: bucketName,
        Key: `${folders.notes}/${fileName}`,
      })
    );
    console.log("MIME TYPE FROM S3:", metadata.ContentType);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getNoteFromS3 = async (
  fileName: string,
  expireTime: number | null = null
) => {
  try {
    // Check if note file exists on S3
    const check = await doesNoteExist(fileName);

    if (check) {
      // Get file from S3
      const command = new GetObjectCommand({
        Bucket: bucketName,
        Key: `${folders.notes}/${fileName}`,
      });

      // Generate signed URL with expire time if provided
      if (expireTime !== null) {
        const url = await getSignedUrl(s3Client, command, {
          expiresIn: expireTime,
        });
        return url;
      } else {
        const url = await getSignedUrl(s3Client, command);
        return url;
      }
    }

    throw new Error(
      `Could not find file "${folders.notes}/${fileName}" in S3.`
    );
  } catch (error) {
    console.error(error);
    throw error;
  }
};

/**
 * --------------------------------------------------------
 *                      PRIVATE METHODS
 * --------------------------------------------------------
 */

const doesNoteExist = async (fileName: string) => {
  try {
    await s3Client.send(
      new HeadObjectCommand({
        Bucket: bucketName,
        Key: `${folders.notes}/${fileName}`,
      })
    );

    return true;
  } catch (error) {
    if (error instanceof Error && error.name === "NotFound") {
      return false;
    } else {
      return false;
    }
  }
};

const validateContentType = (filePath: string) => {
  const contentType = mime.getType(filePath) || "";

  if (!acceptedFileTypes.includes(contentType)) {
    throw new Error(
      `Unsupported file type: ${contentType}. Accepted types are ${acceptedFileTypes.join(
        ", "
      )}.`
    );
  }

  return contentType;
};
