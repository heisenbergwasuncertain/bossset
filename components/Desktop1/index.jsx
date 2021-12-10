import React from "react";
import styled from "styled-components";
import {
  MontserratSemiBoldWhite25px,
  MontserratBoldWhite25px,
  MontserratSemiBoldRed22px,
  MontserratSemiBoldJacksonsPurple25p
} from "../../styledMixins";
import "./Desktop1.css";

function Desktop1(props) {
  const {
    dpbossNetlifyApp,
    sattaMatkaKalyanMumbaiResult,
    kalyanMatkaMatka,
    liveUpdate,
    place,
    phone,
    place2,
    phone2,
    dpbossSattaMatkaK,
    liveMatkaResult,
    spanText,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    spanText6
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="desktop-1 screen">
        <OverlapGroup2>
          <Title>{dpbossNetlifyApp}</Title>
        </OverlapGroup2>
        <Line1 src="https://anima-uploads.s3.amazonaws.com/projects/614f542c0519d7a4a11925f1/releases/61b38e7d5e09306c093431ad/img/line-2@1x.svg" />
        <SattaMatkaKalyanMumbaiResult>
          {sattaMatkaKalyanMumbaiResult}
        </SattaMatkaKalyanMumbaiResult>
        <KALYANMATKAMATKA>{kalyanMatkaMatka}</KALYANMATKAMATKA>
        <OverlapGroup3>
          <Rectangle1></Rectangle1>
          <LIVEUPDATE>{liveUpdate}</LIVEUPDATE>
          <Line2 src="https://anima-uploads.s3.amazonaws.com/projects/614f542c0519d7a4a11925f1/releases/61b38e7d5e09306c093431ad/img/line-2@1x.svg" />
        </OverlapGroup3>
        <OverlapGroupContainer>
          <OverlapGroup8>
            <Place>{place}</Place>
            <Phone>{phone}</Phone>
          </OverlapGroup8>
          <OverlapGroup9>
            <Place>{place2}</Place>
            <Phone>{phone2}</Phone>
          </OverlapGroup9>
        </OverlapGroupContainer>
        <OverlapGroup4>
          <DPBOSSSATTAMATKAK>{dpbossSattaMatkaK}</DPBOSSSATTAMATKAK>
        </OverlapGroup4>
        <OverlapGroup5>
          <LIVEMATKARESULT>{liveMatkaResult}</LIVEMATKARESULT>
        </OverlapGroup5>
        <OverlapGroupContainer1>
          <OverlapGroup6>
            <TIMEBAZAR7906258>
              <span className="montserrat-bold-deep-koamaru-25px">
                {spanText}
              </span>
              <span className="montserrat-normal-red-25px">{spanText2}</span>
              <span className="montserrat-normal-black-17px">{spanText3}</span>
            </TIMEBAZAR7906258>
          </OverlapGroup6>
          <OverlapGroup7>
            <TIMEBAZAR7906258>
              <span className="montserrat-bold-deep-koamaru-25px">
                {spanText4}
              </span>
              <span className="montserrat-normal-red-25px">{spanText5}</span>
              <span className="montserrat-normal-black-17px">{spanText6}</span>
            </TIMEBAZAR7906258>
          </OverlapGroup7>
        </OverlapGroupContainer1>
      </div>
    </div>
  );
}

const OverlapGroup2 = styled.div`
  height: 77px;
  display: flex;
  padding: 24px 545.5px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 1440px;
  background-color: var(--black);
`;

const Title = styled.h1`
  min-height: 29px;
  min-width: 345px;
  font-family: var(--font-family-montserrat);
  font-weight: 700;
  font-style: italic;
  color: var(--anzac);
  font-size: var(--font-size-xxxxl);
  text-align: center;
  letter-spacing: 0;
  line-height: 28.8px;
  white-space: nowrap;
`;

const Line1 = styled.img`
  width: 1445px;
  height: 5px;
  margin-top: 2px;
  margin-left: 5px;
`;

const SattaMatkaKalyanMumbaiResult = styled.div`
  min-height: 29px;
  margin-top: 11px;
  margin-left: 5px;
  min-width: 631px;
  font-family: var(--font-family-montserrat);
  font-weight: 600;
  color: var(--black);
  font-size: var(--font-size-xxxxl);
  text-align: center;
  letter-spacing: 0;
  line-height: 28.8px;
  white-space: nowrap;
`;

const KALYANMATKAMATKA = styled.p`
  min-height: 58px;
  margin-top: 10px;
  margin-left: 5px;
  min-width: 1297px;
  font-family: var(--font-family-montserrat);
  font-weight: 600;
  color: var(--black);
  font-size: var(--font-size-xs);
  text-align: center;
  letter-spacing: 0;
  line-height: 28.8px;
`;

const OverlapGroup3 = styled.div`
  width: 1445px;
  height: 63px;
  position: relative;
  margin-top: 10px;
  margin-right: 1px;
`;

const Rectangle1 = styled.div`
  position: absolute;
  width: 1440px;
  height: 61px;
  top: 2px;
  left: 3px;
  background-color: #000000d6;
`;

const LIVEUPDATE = styled.div`
  position: absolute;
  top: 18px;
  left: 595px;
  font-family: var(--font-family-montserrat);
  font-weight: 600;
  color: var(--white);
  font-size: var(--font-size-xxxl);
  text-align: center;
  letter-spacing: 0;
  line-height: 28.8px;
  white-space: nowrap;
`;

const Line2 = styled.img`
  position: absolute;
  width: 1445px;
  height: 5px;
  top: 0;
  left: 0;
`;

const OverlapGroupContainer = styled.div`
  width: 1440px;
  margin-top: 6px;
  display: flex;
  flex-direction: column;
  padding: 18px 17px;
  align-items: flex-end;
  min-height: 256px;
  background-color: #ebedef;
  border-radius: 7px;
`;

const OverlapGroup8 = styled.div`
  width: 1401px;
  margin-right: 1px;
  display: flex;
  flex-direction: column;
  padding: 14px 642px;
  align-items: flex-end;
  min-height: 99px;
  background-color: var(--peach-orange);
  border-radius: 10px;
  box-shadow: 0px 4px 4px #00000040;
`;

const Place = styled.div`
  ${MontserratSemiBoldJacksonsPurple25p}
  min-height: 29px;
  align-self: center;
  margin-top: 1px;
  margin-left: 1px;
  min-width: 104px;
  text-align: center;
  letter-spacing: 0;
  line-height: 28.8px;
  white-space: nowrap;
`;

const Phone = styled.div`
  ${MontserratSemiBoldRed22px}
  min-height: 29px;
  margin-top: 12px;
  min-width: 116px;
  text-align: center;
  letter-spacing: 0;
  line-height: 28.8px;
  white-space: nowrap;
`;

const OverlapGroup9 = styled.div`
  width: 1401px;
  margin-top: 14px;
  display: flex;
  flex-direction: column;
  padding: 14px 642px;
  align-items: flex-end;
  min-height: 99px;
  background-color: var(--peach-orange);
  border-radius: 10px;
  box-shadow: 0px 4px 4px #00000040;
`;

const OverlapGroup4 = styled.div`
  height: 136px;
  margin-top: 14px;
  display: flex;
  padding: 8px 604px;
  align-items: flex-start;
  min-width: 1422px;
  background-color: #f12f2f;
  border-radius: 5px;
  border: 2px solid var(--sizzling-sunrise);
  box-shadow: 0px 4px 4px #00000040;
`;

const DPBOSSSATTAMATKAK = styled.div`
  ${MontserratSemiBoldWhite25px}
  min-height: 116px;
  min-width: 210px;
  text-align: center;
  letter-spacing: 0;
  line-height: 28.8px;
`;

const OverlapGroup5 = styled.div`
  height: 47px;
  margin-top: 13px;
  display: flex;
  padding: 0 564px;
  justify-content: flex-end;
  align-items: center;
  min-width: 1422px;
  background-color: var(--biscay);
  border-radius: 5px;
  box-shadow: 0px 4px 4px #00000040;
`;

const LIVEMATKARESULT = styled.div`
  ${MontserratSemiBoldWhite25px}
  min-height: 29px;
  min-width: 291px;
  text-align: center;
  letter-spacing: 0;
  line-height: 28.8px;
  white-space: nowrap;
`;

const OverlapGroupContainer1 = styled.div`
  width: 1441px;
  margin-top: 8px;
  margin-left: 1px;
  display: flex;
  flex-direction: column;
  padding: 11px 18px;
  align-items: flex-end;
  min-height: 289px;
  background-color: #eeeeee;
  box-shadow: 0px 4px 4px #00000040;
`;

const OverlapGroup6 = styled.div`
  height: 121px;
  margin-right: 1px;
  display: flex;
  padding: 15px 618px;
  align-items: flex-end;
  min-width: 1400px;
  background-color: var(--white);
  border-radius: 10px;
  box-shadow: 0px 4px 4px #00000040;
`;

const TIMEBAZAR7906258 = styled.div`
  ${MontserratBoldWhite25px}
  width: 164px;
  min-height: 90px;
  text-align: center;
  letter-spacing: 0;
  line-height: 28.8px;
`;

const OverlapGroup7 = styled.div`
  height: 121px;
  margin-top: 14px;
  display: flex;
  padding: 15px 618px;
  align-items: flex-end;
  min-width: 1400px;
  background-color: var(--peach-orange);
  border-radius: 10px;
  box-shadow: 0px 4px 4px #00000040;
`;

export default Desktop1;
