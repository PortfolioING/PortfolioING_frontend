import { useState } from "react";
import { Label, PreviewWrapper, ImgWrapper } from "./FileUpdate.styles";

const Img = ({ previewSrc, onClick }) => {
  return (
    <ImgWrapper>
      <img src={previewSrc} alt="미리보기" />
      <button onClick={onClick}>+</button>
    </ImgWrapper>
  );
};

const FileUpdate = () => {
  const [previewSrc, setPreviewSrc] = useState("");

  const handleFileChange = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setPreviewSrc(e.target.result);
      reader.readAsDataURL(file);
    } else {
      setPreviewSrc("");
    }
  };

  const triggerFileInput = () => {
    document.getElementById("file").click();
  };

  return (
    <PreviewWrapper>
      <input
        id="file"
        type="file"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
      <Label htmlFor="file">
        {previewSrc ? (
          <Img previewSrc={previewSrc} onClick={triggerFileInput} />
        ) : (
          "사진 선택하기"
        )}
      </Label>
    </PreviewWrapper>
  );
};

export default FileUpdate;
