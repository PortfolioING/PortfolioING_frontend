import { useState, useId } from "react";
import { Label, PreviewWrapper, ImgWrapper } from "./FileUpdate.styles";
import Plus from "../../asset/plus.svg";
const Img = ({ previewSrc, onClick }) => {
  return (
    <ImgWrapper>
      <img src={previewSrc} alt="미리보기" />
      <button type="button" onClick={onClick}>
        <img src={Plus} alt="plus icon" />
      </button>
    </ImgWrapper>
  );
};

const FileUpdate = ({ defaultImg }) => {
  console.log(defaultImg);
  const [previewSrc, setPreviewSrc] = useState(defaultImg || "");
  const uniqueId = useId();

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
    document.getElementById(uniqueId).click();
  };

  return (
    <PreviewWrapper>
      <input
        id={uniqueId}
        type="file"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
      <Label htmlFor={uniqueId}>
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
