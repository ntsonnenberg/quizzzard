import {
  GetObjectCommand,
  HeadObjectCommand,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { fileTypeFromBuffer } from "file-type";

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

export const uploadNoteToS3 = async (fileName: string, buffer: ArrayBuffer) => {
  try {
    const contentType = await validateContentType(buffer);

    // Parameters for S3 upload
    const params = {
      Bucket: bucketName,
      Key: `${folders.notes}/${fileName}`,
      Body: Buffer.from(buffer),
      ContentType: contentType,
    };

    // Upload file to S3
    await s3Client.send(new PutObjectCommand(params));
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

const validateContentType = async (buffer: ArrayBuffer) => {
  const contentType = await fileTypeFromBuffer(buffer);

  if (!acceptedFileTypes.includes(contentType?.mime || "")) {
    throw new Error(
      `Unsupported file type: ${
        contentType?.mime
      }. Accepted types are ${acceptedFileTypes.join(", ")}.`
    );
  }

  return contentType?.mime;
};
