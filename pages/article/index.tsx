import dynamic from "next/dynamic";
import {FC} from "react"

const EditorWrapSsr = dynamic(() => import("@/components/Editor"), {
    ssr: false,
  });


const index: FC = () => {
  return (
    <div>
      <EditorWrapSsr />
    </div>
  )
};

export default index;
