"use client";

import flagsmith from "flagsmith/isomorphic";
import { FlagsmithProvider } from "flagsmith/react";
import { IState } from "flagsmith/types";
import { ReactElement } from "react";

interface Props {
  children: React.ReactNode;
  flagsmithState?: IState<string>;
}

export default function FlagProvider({ children, flagsmithState }: Props) {
  return (
    <FlagsmithProvider flagsmith={flagsmith} serverState={flagsmithState}>
      {children as ReactElement}
    </FlagsmithProvider>
  );
}
