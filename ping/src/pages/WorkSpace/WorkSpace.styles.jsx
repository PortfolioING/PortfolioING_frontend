import styled from "styled-components";

export const WorkSpaceContainer = styled.div`
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding-top: 50px;
`;

export const WorkSpaceWrapper = styled.div`
    background-color: white;
    display: flex;
    border-radius: 10px;
    padding: 80px 20px;
    width: 95%;
    height: 100%;
    justify-content: center;
`;

export const Wrapper = styled.div`
    width: 90%;
    display: block;
    
    .hr {
        border: none;
        border-top: 2px solid #999;
        margin: 20px 0;
    }

    .empty-text {
        font-size: 24px;
        text-align: center;
        color: #999;
        margin: 50px 0;
    }
`;

export const UserSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
`;

export const Title = styled.div`
    font-size: 42px;
    font-weight: 800;
    line-height: 70px;
`;

export const Section = styled.div`
    padding-bottom: 20px;

    .section-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    h2 {
        font-size: 38px;
        font-weight: 700;
        margin: 20px 0;
    }

    .empty-text {
        padding: 300px 0;
    }   
`;

export const Input = styled.input`
    border-radius: 20px;
    border: 2px solid #ccc;
    padding: 15px;
    width: 300px;
    font-size: 18px;

    &::placeholder {
        color: #D9D9D9;
    }
`;

export const TemplateGrid = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const TemplateItem = styled.div`
    display: flex;
    background: #fff;
    padding: 10px;
    border-radius: 6px;
    height: 250px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;

    &:hover {
        background: #ccc;
    }

    .template-info {
        margin-top: 50px;

        .template-title {
            font-size: 25px;
            font-weight: 600;
            margin: 10px 0;
        }

        .template-exp {
            margin-top: 30px;
            font-size: 19px;
            font-weight: 400;
        }
    }

    .portfolio-info {
        margin-top: 20px;
        
        .portfolio-title {
            font-size: 25px;
            font-weight: 600;
            margin: 10px 0;
        }

        .portfolio-exp {
            margin-top: 10px;
            font-size: 16px;
            font-weight: 200;
        }

        .hashtag {
            margin-top: 30%;
            margin-right: 20px;
            border-radius: 5px;
            display: inline-block;
            padding: 7px 10px;
            background-color: #ECECEC;
            
        }
    }
`;

export const Thumbnail = styled.div`
    width: 30%;
    height: 100%;
    background: #eee;
    border-radius: 4px;
    margin: 0 40px 20px 0;
`;

export const Pagination = styled.div`
    text-align: center;
    margin-top: 10px;
    color: #666;

    span {
        font-size: 20px;
        margin: 0 8px;
    }

    span:nth-child(1),
    span:nth-child(3) {
        &:hover {
            background-color: #ECECEC;
            cursor: pointer;
        }
    }
`;
