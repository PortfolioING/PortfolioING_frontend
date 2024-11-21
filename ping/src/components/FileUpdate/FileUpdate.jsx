import { useState, useId } from "react";
import { Label, PreviewWrapper, ImgWrapper } from "./FileUpdate.styles";
import Plus from "../../asset/plus.svg";
const Img = ({ previewSrc, onClick, defaultImg }) => {
  return (
    <ImgWrapper>
      {previewSrc ? (
        typeof previewSrc === "string" ? (
          // previewSrc가 문자열(URL)일 경우
          <img src={previewSrc} alt="미리보기" />
        ) : (
          // previewSrc가 JSX 컴포넌트일 경우
          previewSrc
        )
      ) : typeof defaultImg === "string" ? (
        // defaultImg가 문자열(URL)일 경우
        <img src={defaultImg} alt="기본 이미지" />
      ) : (
        // defaultImg가 JSX 컴포넌트일 경우
        defaultImg
      )}
      <button type="button" onClick={onClick}>
        <img src={Plus} alt="plus icon" />
      </button>
    </ImgWrapper>
  );
};

const FileUpdate = ({ defaultImg }) => {
  const [previewSrc, setPreviewSrc] = useState(defaultImg || ""); // 이미지 URL 상태
  const uniqueId = useId();

  const handleFileChange = (event) => {
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
          <Img onClick={triggerFileInput} previewSrc={previewSrc} />
        ) : (
          "사진선택"
        )}
      </Label>
    </PreviewWrapper>
  );
};

export default FileUpdate;
