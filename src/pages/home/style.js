import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width: 960px;
    margin: 0 auto;
    overflow: hidden;
`;
export const HomeLeft = styled.div`
    margin-left: 15px;
    padding-top: 30px;
    width: 625px;
    float: left;
    .banner-img {
        width: 485px;
        height: 210px;
    }
`;
export const HomeRight = styled.div`
    float: right;
    width: 2px80;
`;
export const TopicWrapper = styled.div`
    margin-left: -10px;
    padding: 20px 0 10px 0;
    overflow: hidden;
`;
export const TopicItem = styled.div`
    float:left;
    height: 32px;
    line-height: 32px;
    padding-right: 10px;
    background:#f7f7f7;
    font-size: 14px;
    color:#000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    .topic-pic {
        display: block;//
        float:left;//
        width: 32px;
        height:32px;
        margin-right: 10px;
    }
`;

export const RecommandWrapper = styled.div`
    margin: 30px 0;
    width: 280px;
`;
export const RecommandItem = styled.div`
    width: 280px;
    height: 50px;
    background: url(${(props) => props.imgUrl});
    background-size: contain
`;
export const WriterWrapper = styled.div`
    width: 278px;
    border: 1px solid #dcdcdc;
    border-radius: 3px;
    height: 300px;
    line-height: 300px;
    tet-align:center;
`;