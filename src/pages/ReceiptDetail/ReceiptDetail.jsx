import React, { useState } from 'react';
import styled from 'styled-components';
import ReceiptInfo from './Component/ReceiptInfo';
import Typography from '../../component/Typography/Typography';
import { FiArrowLeft, FiDownload } from 'react-icons/fi';
import VatInfo from './Component/VatInfo';
import CardInfo from './Component/CardInfo';

const AllWrapper = styled.div`
  width: 100%;
  height: auto;
  background-color: #f1f1f1;
  display: flex;
  justify-content: center;
  vertical-align: top;
  flex-wrap: wrap;
`;

const TitleWrapper = styled.div`
  width: 385px;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ReceiptPaper = styled.div`
  width: 284px;
  height: 568px;
  background-color: #ffffff;
  filter: drop-shadow(2px 2px 16px rgba(0, 0, 0, 0.11));
  border-radius: 5px;
`;

const ImgSection = styled.div`
  width: 236px;
  height: 124px;
  margin-top: 24px;
  background-color: #e0efef;
  border: 1.4px dashed #327676;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImgWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
`;

const AlignWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const DecoImgWrapper = styled.div`
  width: 34px;
  height: 34px;
  background-image: url('img/DecoButton.png');
  background-size: cover;
`;

const DecoButton = styled.button`
  width: 58px;
  height: 58px;
  background-color: #328e8e;
  border-radius: 100%;
  border: none;
  position: fixed;
  left: 320px;
  top: 620px;
  filter: drop-shadow(2px 2px 16px rgba(0, 0, 0, 0.11));
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 3px;
  padding-left: 2px;
`;

const Img = styled.img``;

const ReceiptDetail = ({ data }) => {
  console.log(data);

  //이미지 URL 변수 -> 아직 기능 구현 안됨.
  const [imgURL, setImgURL] = useState('img/DecoButton.png');

  const [address, setAddress] = useState('인천광역시 미추홀구 인하로 53');
  const [storeName, setStoreName] = useState('카페삼층 인하대점');

  //구매한 물품, 가격 등등을 나타내는 배열
  const MenuList = [
    { menuName: 'T)제주유기농말차', menuEachPrice: '6300', menuCount: '2', menuTotalPrice: '6300' },
    { menuName: 'S)에스프레소', menuEachPrice: '6300', menuCount: '1', menuTotalPrice: '6300' },
    { menuName: 'S)자몽홍차레몬티', menuEachPrice: '4300', menuCount: '2', menuTotalPrice: '8600' },
    { menuName: '딸기생크림케이크', menuEachPrice: '6300', menuCount: '1', menuTotalPrice: '6300' },
  ];

  //과세물품가액
  const [taxablePrice, settaxablePrice] = useState('27,872');
  //부가세
  const [vat, setVat] = useState('228');
  //합계
  const [totalVat, setTotalVat] = useState('28,100');

  //결제 카드 정보
  const [cardName, setCardName] = useState('0014 현대');
  //카드 비번
  const [cardNumber, setCardNumber] = useState('29481293**434**/00312343');
  // 지불 방법
  const [payMent, setPayMent] = useState('일시불');
  // 얼마 지불했는지
  const [payPrice, setPayPrice] = useState('28,000');

  const [payDay, setPayDay] = useState('2023-04-31 09:13:43');

  const { brand_name, receipt_img_url, product_name, ea, date, total_cost } = data;
  return (
    <>
      {/* <AllWrapper>
        <TitleWrapper>
          <FiArrowLeft size={22} />
          <Typography SmallTitleText>영수증 상세보기</Typography>
          <FiDownload size={20} />
        </TitleWrapper>
        <ReceiptPaper>
          <ImgWrapper>
            <ImgSection>
              {receipt_img_url ? (
                <Img className='receiptImg' alt='receiptImg' src={`${process.env.REACT_APP_API}${receipt_img_url}`} />
              ) : (
                <Img className='receiptImg' alt='receiptImg' src={'img/EmptyImg.png'} />
              )}
            </ImgSection>
          </ImgWrapper>

          <AlignWrapper>
            <ReceiptInfo address={address} storeName={storeName} MenuList={MenuList} />
            <VatInfo taxablePrice={taxablePrice} vat={vat} totalVat={totalVat} />
            <CardInfo
              cardName={cardName}
              cardNumber={cardNumber}
              payMent={payMent}
              payPrice={payPrice}
              payDay={payDay}
            />
          </AlignWrapper>
        </ReceiptPaper>
        <DecoButton>
          <DecoImgWrapper />
        </DecoButton>
      </AllWrapper> */}
    </>
  );
};

export default ReceiptDetail;
