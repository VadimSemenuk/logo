import {ReactNode} from "react";

interface Question {
  title: string;
  description: string | ReactNode;
}

export default Question;