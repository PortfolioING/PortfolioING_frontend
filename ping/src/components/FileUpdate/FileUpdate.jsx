import { useState, useId } from "react";
import { Label, PreviewWrapper, ImgWrapper } from "./FileUpdate.styles";
import Plus from "../../asset/icons/plus.svg";
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
const FileUpdate = ({ onChange, defaultImg, onFocus }) => {
  // console.log(defaultImg);
  const [previewSrc, setPreviewSrc] = useState(defaultImg || "");
  const uniqueId = useId();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target.result; // Base64 인코딩된 이미지 URL
        setPreviewSrc(imageUrl); // 미리보기 이미지 업데이트
        onChange(imageUrl); // 부모 컴포넌트에 이미지 URL 전달
        console.log("선택한 이미지 URL:", imageUrl); // 이미지 URL 출력
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewSrc("");
      onChange(null); // 파일이 선택되지 않았을 때 null 전달
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
        onClick={onFocus}
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
