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
const FileUpdate = ({ onChange, defaultImg }) => {
  // console.log(defaultImg);
  const [previewSrc, setPreviewSrc] = useState(defaultImg || "");
  const uniqueId = useId();

  const handleFileChange = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewSrc(e.target.result);
        onChange(file); // 파일 정보를 부모 컴포넌트에 전달
        console.log("선택한 파일:", file); // 파일 정보 출력
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
