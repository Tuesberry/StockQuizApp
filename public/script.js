const questions_Easy = [  // 자바스크립트 배열 선언 방식 
    {
        question: '다음 빈칸에 들어갈 단어로 가장 적절한 것은? \n 삼성전자의 _은(는) 75000원이다',
        answers: [
            { text: '주가', correct: true },
            { text: '주권', correct: false },
            { text: '매수', correct: false },
            { text: '의결권', correct: false }

        ]
    },

    {
        question: '다음 지문에서 설명하는 단어로 가장 적절한 것은? \n 증권사 계좌에 입금되어 있는 현금으로, 아직 거래 비용으로 사용되지 않은 돈',
        answers: [
            { text: '배당금', correct: false },
            { text: '예수금', correct: true },
            { text: '채권', correct: false },
            { text: '차익', correct: false }
        ]
    },

    {
        question: '다음 빈칸에 들어갈 단어로 가장 적절한 것은? \n 맥쿼리 인프라는 주주에게 주당 700원씩 _했다',
        answers: [
            { text: '매도', correct: false },
            { text: '공시', correct: false },
            { text: '매수', correct: false },
            { text: '배당', correct: true }
        ]
    },
    {
        question: '다음 지문에서 설명하는 단어로 가장 적절한 것은? \n 주식이 거래되는 가격, 개장 후 처음에 거래되는 시작가를 의미하기도 함',
        answers: [
            { text: '종가', correct: false },
            { text: '시가', correct: true },
            { text: '자본금', correct: false },
            { text: '매도', correct: false }
        ]
    },
    {
        question: '다음 지문에서 설명하는 단어로 가장 적절한 것은? \n 공정한 가격 형성을 목적으로 사업 내용이나 재무상황, 영업 실적 등 기업 내용을 투자자가 알 수 있게 하는 제도. ',
        answers: [
            { text: '매도', correct: false },
            { text: '공시', correct: true },
            { text: '매수', correct: false },
            { text: '배당', correct: false }
        ]
    },
    {
        question: '다음 빈칸에 들어갈 단어로 가장 적절한 것은? \n 유원이는 5만원에 삼성전자 주식을 사서, 7만원 팔아 2만원의 _을 보았다.  ',
        answers: [
            { text: '배당', correct: false },
            { text: '보합', correct: false },
            { text: '의결권', correct: false },
            { text: '차익', correct: true }
        ]
    },
    {
        question: '다음 지문에서 설명하는 단어로 가장 적절한 것은? \n 자산을 처분하는 행위',
        answers: [
            { text: '매도', correct: true },
            { text: '선물', correct: false },
            { text: '주식 소각', correct: false },
            { text: '공매도', correct: false }
        ]
    },

    {
        question: '다음 지문에서 설명하는 단어로 가장 적절한 것은?  \n 자산을 사들이는 행위',
        answers: [
            { text: '감자', correct: false },
            { text: '증자', correct: false },
            { text: '매수', correct: true },
            { text: '매도', correct: false }
        ]
    },
    {
        question: '주식시장이 개장한 후 그날 마지막으로 체결된 거래 가격을 _라고 한다 ',
        answers: [
            { text: '종가', correct: true },
            { text: '하한가', correct: false },
            { text: '상한가', correct: false },
            { text: '시가', correct: false },
        ]
    },
    {
        question: '다음 지문에서 설명하는 단어로 가장 적절한 것은?  \n 주주가 주주총회에 출석하여 의결에 참석할 수 있는 권리',
        answers: [
            { text: '주권', correct: false },
            { text: '의결권', correct: true },
            { text: '상장', correct: false },
            { text: '자사주', correct: false }
        ]
    },
    {
        question: '주가가 변동하지 않거나 변동의 폭이 극히 작은 상태를 "보합"이라 한다',
        answers: [
            { text: 'O', correct: true },
            { text: 'X', correct: false }
        ]
    },
    {
        question: '다음 지문에서 설명하는 단어로 가장 적절한 것은?  \n . 기업이 자사의 주식이나 펀드와 같은 금융 상품을 증권거래소에 등록하는 일 ',
        answers: [
            { text: '매도', correct: false },
            { text: '진열', correct: false },
            { text: '배당', correct: false },
            { text: '상장', correct: true }
        ]
    },
    {
        question: '주식의 수량이 변하지 않았을 때, 주가가 오르면 기업의 자본금도 같이 상승한다',
        answers: [
            { text: 'O', correct: true },
            { text: 'X', correct: false }
        ]
    },
    {
        question: '다음 지문에서 설명하는 단어로 가장 적절한 것은?  \n  개인 또는 기업의 총 자산에서 부채를 차감한 수치로, 자기자본이라 부르기도 한다',
        answers: [
            { text: '자본금', correct: false },
            { text: '순자산', correct: false },
            { text: '시가총액', correct: true },
            { text: '액면가', correct: false }
        ]
    },
    {
        question: '다음 지문에서 설명하는 단어로 가장 적절한 것은?  \n 투자자들에게서 모은 자금을 주식, 채권 등에 투자하고, 그로 인해 발생한 이익을 고객들에게 배당하는 제도',
        answers: [
            { text: '선물', correct: false },
            { text: '주가지수', correct: false },
            { text: '펀드', correct: true },
            { text: '공매도', correct: false }
        ]
    },
    {
        question: '주식을 가지고 있다는 것을 증명하는 증서로, 우리나라의 경우 주로 한국예탁결제원에 보관되는 것은?',
        answers: [
            { text: '자사주', correct: false },
            { text: '주권', correct: true },
            { text: '채권', correct: false },
            { text: '의결권', correct: false },
        ]
    }
]

const questions_Medium = [
    {
        question: '다음 지문에서 설명하는 단어로 가장 적절한 것은?  \n손해를 감수하고서 매입 가격보다 낮은 가격으로 매도하는 행위',
        answers: [
            { text: '공매도', correct: false },
            { text: '자본잠식', correct: false },
            { text: '손절매', correct: true },
            { text: '증자', correct: false }
        ]
    },

    {
        question: '다음 지문에서 설명하는 단어로 가장 적절한 것은? \n 기업이 사업을 확장하거나 부채를 갚기 위해 주식을 발행하여 자본금을 증가시키는 행위  ',
        answers: [
            { text: '주식 소각', correct: false },
            { text: 'EPS', correct: false },
            { text: '증자', correct: true },
            { text: '공매도', correct: false }

        ]
    },

    {
        question: '다음 지문에서 설명하는 단어로 가장 적절한 것은? \n  기업 또는 주식시장이 어느 정도의 규모를 가지고 있는가를 나타내는 지표로, 모든 상장 주식을 시가로 평가한 총액  ',
        answers: [
            { text: '시가총액', correct: true },
            { text: '주가지수', correct: false },
            { text: '순자산', correct: false },
            { text: '자본금', correct: false },
        ]
    },

    {
        question: '일반적으로 특정 기업의 EPS가 높다는 것은 실적이 좋다는 것을 의미한다  ',
        answers: [
            { text: 'O', correct: true },
            { text: 'x', correct: false }
        ]
    },

    {
        question: '다음 빈칸에 들어갈 단어로 가장 적절한 것은?  \n  코스피는 한국 경제의 체온이라고도 불리며, 한국 거래소에서 발표하는 _ 중 하나이다 ',
        answers: [
            { text: '액면가', correct: false },
            { text: '공매도', correct: false },
            { text: 'EPS', correct: false },
            { text: '주가지수', correct: true }
        ]
    },

    {
        question: '다음 빈칸에 들어갈 단어로 가장 적절한 것은?  \n  주주들이 모여 기업의 중대 사안을 논의하는 회의 ',
        answers: [
            { text: '이사회', correct: false },
            { text: '주주총회', correct: true },
            { text: '청문회', correct: false },
            { text: '삼합회', correct: false }
        ]
    },

    {
        question: '액면가는 주권에 표시된 가격으로, 투자할 때 중요시되는 요소이다  ',
        answers: [
            { text: 'O', correct: true },
            { text: 'x', correct: false }
        ]
    },
    {
        question: '다음 지문에서 설명하는 단어로 가장 적절한 것은? \n 주가가 하락할 것 같은 종목의 주식을 빌려 매도한 후, 실제로 주가가 하락하면 낮은 가격에 다시 사들여 빌린 주식을 갚음으로써 차익을 얻는 매매기법  ',
        answers: [
            { text: '공매도', correct: true },
            { text: '선물', correct: false },
            { text: '공모', correct: false },
            { text: '장외거래', correct: false },
        ]
    },
    {
        question: '다음 지문에서 설명하는 단어로 가장 적절한 것은? \n  기업이 보유하고 있는 자사의 주식',
        answers: [
            { text: '보통주', correct: false },
            { text: '우선주', correct: false },
            { text: '공모주', correct: false },
            { text: '자사주', correct: true },
        ]
    },
    {
        question: '다음 빈칸에 들어갈 단어로 가장 적절한 것은?  \n 코로나19 대유행으로 인해 바이오 _가 상승하는 경향이 나타났다',
        answers: [
            { text: '잎새주', correct: false },
            { text: '테마주', correct: true },
            { text: '동전주', correct: false },
            { text: '가격제한폭', correct: false },
        ]
    },
    {
        question: '일반적으로 선물은 위험성이 높다',
        answers: [
            { text: 'O', correct: true },
            { text: 'x', correct: false }
        ]
    },

    {
        question: '다음 지문에서 설명하는 단어로 가장 적절한 것은?  \n 급격한 주가 변동으로 인한 혼란 방지를 위해 전일 종가를 기준으로 하루 동안 오르내릴 수 있는 범위를 제한하는 것 ',
        answers: [
            { text: '사이드카', correct: false },
            { text: 'EPS', correct: false },
            { text: '가격제한폭', correct: true },
            { text: '서킷브레이커', correct: false }
        ]
    },

    {
        question: '다음 지문에서 설명하는 단어로 가장 적절한 것은? \n 주가지수에 영향력이 큰 종목들 위주로 투자해 주가지수가 상승할 때 이익을 얻는 펀드  ',
        answers: [
            { text: '라임 펀드 ', correct: false },
            { text: '인덱스 펀드', correct: true },
            { text: '적립식 펀드', correct: false },
            { text: '혼합형 펀드', correct: false }
        ]
    },
    {
        question: '연말에는 일반적으로 우선주가 주목받는다  ',
        answers: [
            { text: 'O', correct: true },
            { text: 'x', correct: false }
        ]
    }

]

const questions_Expert = [
    {
        question: '다음 지문에서 설명하는 단어로 가장 적절한 것은? \n 인덱스 펀드를 거래소에 상장하여 투자자들이 주식처럼 거래할 수 있도록 만든 상품',
        answers: [
            { text: '선물', correct: false },
            { text: 'ETF', correct: true },
            { text: '채권', correct: false },
            { text: '보급형 펀드', correct: false }
        ]
    },

    {
        question: '다음 지문에서 설명하는 단어로 가장 적절한 것은? \n 기업이 자사주를 취득해 소멸시키는 것으로, 발행 주식수를 줄여 주가를 높이는 행위',
        answers: [
            { text: '증자 ', correct: false },
            { text: '감자', correct: false },
            { text: '자본 잠식', correct: false },
            { text: '주식 소각', correct: true }
        ]
    },

    {
        question: ' 일정기간 동안의 주가를 산술 평균한 값인 주가이동평균을 차례로 연결해 만든 선을 이동평균선이라 한다 ',
        answers: [
            { text: 'O ', correct: true },
            { text: 'X', correct: false }

        ]
    },

    {
        question: '다음 지문에서 설명하는 단어로 가장 적절한 것은? \n 주가를 주당 순자산으로 나눈 값',
        answers: [
            { text: 'IBR', correct: false },
            { text: 'PBR ', correct: true },
            { text: 'PER', correct: false },
            { text: 'EPS', correct: false }
        ]
    },

    {
        question: '다음 지문에서 설명하는 단어로 가장 적절한 것은? \n 주가를 EPS(주당순이익)으로 나눈 수치 ',
        answers: [
            { text: 'PER ', correct: true },
            { text: 'ETF', correct: false },
            { text: 'PBR', correct: false },
            { text: 'WTR', correct: false }
        ]
    },

    {
        question: '다음 지문에서 설명하는 단어로 가장 적절한 것은? \n  주식 시장 폐장 이후 이루어지는 주식 거래',
        answers: [
            { text: '공매도 ', correct: false },
            { text: '장내거래', correct: false },
            { text: '시간 외 거래 ', correct: true },
            { text: '선물거래', correct: false }
        ]
    },

    {
        question: '다음 지문에서 설명하는 단어로 가장 적절한 것은? \n 주식시장의 일시적인 거래 중단 제도로, 과열된 주식시장을 진정시키기 위한 제도',
        answers: [
            { text: '상장페지', correct: false },
            { text: '반대매매', correct: false },
            { text: '엑소더스', correct: false },
            { text: '서킷브레이커 ', correct: true }
        ]
    },

    {
        question: '다음 지문에서 설명하는 단어로 가장 적절한 것은? \n 기업의 자본금 증자 없이 어떤 주식의 액면가격을 일정 비율로 분할하여 발행주식의 수를 늘리는 것',
        answers: [
            { text: '주식 소각', correct: false },
            { text: '액면분할 ', correct: true },
            { text: '액면병합', correct: false },
            { text: '혼합매매', correct: false }
        ]
    },

    {
        question: '다음 지문에서 설명하는 단어로 가장 적절한 것은? \n 기업이 주식 상장을 목적으로 처음으로 외부 투자자들에게 주식을 공개 매도하는 행위 ',
        answers: [
            { text: '시간 외 거래 ', correct: false },
            { text: '교환 거래 ', correct: false },
            { text: '손익 거래', correct: false },
            { text: '기업공개(IPO)', correct: true }
        ]
    },

    {
        question: '다음 지문에서 설명하는 단어로 가장 적절한 것은? \n 선물 등 위험성이 높은 상품에 투자해 주가 지수보다 높은 수익률을 내는 것을 목표로 하는 펀드 ',
        answers: [
            { text: '인버스 펀드', correct: false },
            { text: '레버리지 인덱스 펀드 ', correct: true },
            { text: '혼합형 펀드', correct: false },
            { text: '적립형 펀드', correct: false }
        ]
    },

    {
        question: '다음 지문에서 설명하는 단어로 가장 적절한 것은? \n 공매도 등을 통해 주가 지수가 하락할 때 이익을 거두는 펀드',
        answers: [
            { text: '주가지수', correct: false },
            { text: '인버스 펀드 ', correct: true },
            { text: '공매도', correct: false },
            { text: '레버리지 인덱스 펀드', correct: false }
        ]
    },

    {
        question: '다음 지문에서 설명하는 단어로 가장 적절한 것은? \n 주로 자본잠식을 벗어나기 위해 기업이 주주들이 보유하고 있는 주식 수를 줄여 자본금을 감소시키는 행위 ',
        answers: [
            { text: '감자', correct: true },
            { text: '증자', correct: false },
            { text: '주식 소각', correct: false },
            { text: '서킷브레이커', correct: false }
        ]
    }




]

const knowledge_Easy = [
    {
        knowledge: '주가',
        contents: '주식의 가격 \n 용례: 삼성전자의 주가는 75000원이다'
    },

    {
        knowledge: '예수금',
        contents: '증권사 계좌에 입금되어 있는 현금으로, 아직 거래 비용으로 사용되지 않은 돈 \n 용례: 찬원이는 주식 계좌에 4만원을 입금하고, 11월 1일에 삼성전자 1주를 시가 4만원에 매입했다. 증거금(보증금)으로 2만원이 당일 결제되었고, 남은 2만원이 3일 후에 완납되어 남은 예수금이 0원이 되었다  '
    },
    {
        knowledge: '배당',
        contents: '주주에게 소유 지분에 따라 해당 기업이 이윤을 배분하는 것 \n 용례: 맥쿼리인프라는 주식 매매를 통해 기업을 지지해준 주주에게 감사를 표하고, 실적 증가에 대한 자신감을 드러내기 위해 지난해 12월 27일에 1주에 700원씩 배당했다 '
    },
    {
        knowledge: '시가',
        contents: '주식이 거래되는 가격, 개장 후 처음에 거래되는 시작가를 의미하기도 함 \n 용례: 동원이는 시가 11000원에 맥쿼리인프라 1주를 사들였다'
    },
    {
        knowledge: '공시',
        contents: '공정한 가격 형성을 목적으로 사업 내용이나 재무상황, 영업 실적 등 기업 내용을 투자자가 알 수 있게 하는 제도 \n 용례: 지난 10월 29일, 맥쿼리인프라는 3분기 재무실적 및 투자법인의 운영성과를 공시했다 '
    },
    {
        knowledge: '차익',
        contents: '상품을 사고 팔 때의 가격의 차이 \n 용례: 지난 10월 29일, 맥쿼리인프라는 3분기 재무실적 및 투자법인의 운영성과를 공시했다 '
    },
    {
        knowledge: '매도',
        contents: '자산을 처분하는 행위 \n 용례: 리환이는 아시아나항공 5주를 25000원에 매도했다'
    },
    {
        knowledge: '매수',
        contents: '자산을 사들이는 행위 \n 용례: 준수는 4만원에 실리콘웍스 1주를 매수했다 '
    },
    {
        knowledge: '종가',
        contents: '주식시장이 개장한 후 그날 마지막으로 체결된 거래 가격  \n  용례: 맥쿼리인프라의 11월 20일 종가는 10950원이다 '
    },
    {
        knowledge: '보합',
        contents: '주가가 변동하지 않거나 변동의 폭이 극히 작은 상태  \n  용례: 맥쿼리인프라의 오늘 주가는 11000원으로 어제와 동일하여 보합을 이루었다'
    },
    {
        knowledge: '의결권',
        contents: '주주가 주주총회에 출석하여 의결에 참석할 수 있는 권리 \n  용례: 대주주들 간의 분쟁이 일어날 때, 소액 주주들의 의결권에 관심이 쏠린다 '
    },
    {
        knowledge: '상장 ',
        contents: '기업이 자사의 주식이나 펀드와 같은 금융 상품을 증권거래소에 등록하는 일 \n 용례: 기업의 상장은 신용등급 상승과 언론의 노출이 잦아지는 효과를 낸다 '
    },
    {
        knowledge: '자본금',
        contents: '일반적으로 주주들이 주식을 취득하면서 기업에 납입한 금액을 의미하는 자본의 일종 \n  용례: 주가가 오르더라도 주식의 개수가 변하지 않는 이상 자본금은 변하지 않는다'
    },
    {
        knowledge: '주권 ',
        contents: '주주가 주식을 가지고 있다는 것을 증명하는 증서 \n  용례: 일반적으로 주식 거래는 인터넷 상에서 이뤄지며, 우리나라의 경우 주권은 한국예탁결제원에 보관된다'
    },
    {
        knowledge: '순자산 ',
        contents: '개인 또는 기업의 총 자산에서 부채를 차감한 수치로, 자기자본이라 부르기도 한다 \n 용례: 애플의 CEO인 팀 쿡의 순자산은 10억 달러가 넘는다 '
    },
    {
        knowledge: '펀드',
        contents: '투자자들에게서 모은 자금을 주식, 채권 등에 투자하고, 그로 인해 발생한 이익을 고객들에게 배당하는 제도  \n 용례: 오렌지펀드는 50명의 개인에게서 20억원의 자금을 모아 미국 IT 기업에 투자했다'
    }

]

const knowledge_Medium = [
    {
        knowledge: '주가지수 ',
        contents: '기준 시점부터 비교 시점까지의 주가의 변동을 나타내기 위해서 기준 시점의 주가를 100으로 하여 작성하는 지수 \n 용례: 주가지수 중 하나인 코스피 지수는 2601.54이다. (기준 시점: 1980년 1월 4일, 비교 시점: 2020년 11월 25일)'
    },
    {
        knowledge: '가격제한폭',
        contents: '급격한 주가 변동으로 인한 혼란 방지를 위해 전일 종가를 기준으로 하루 동안 오르내릴 수 있는 범위를 제한하는 것  \n 용례: 코스피 시장의 가격제한폭은 상하 30%로, 상승폭이 30%에 닿으면 상한가, 하락폭이 -30%에 닿으면 하한가라고 한다'
    },
    {
        knowledge: '손절매  ',
        contents: '본인의 예측과 다르게 주가가 떨어질 때 손해를 감수하고서 매입 가격보다 낮은 가격으로 매도하는 행위 \n 용례: 나는 한글과 컴퓨터 주식을 2만원에 매수했지만, 주가가 하락할 것 같아 18500에 매도했다'
    },
    {
        knowledge: '시가총액 ',
        contents: '기업 또는 주식시장이 어느 정도의 규모를 가지고 있는가를 나타내는 지표로, 모든 상장 주식을 시가로 평가한 총액  \n 용례: 삼성전자의 시가총액은 약 406조이다'
    },
    {
        knowledge: '공매도  ',
        contents: '주가가 하락할 것 같은 종목의 주식을 빌려 매도한 후, 실제로 주가가 하락하면 낮은 가격에 다시 사들여 빌린 주식을 갚음으로써 차익을 얻는 매매기법  \n 용례: 지원이는 A증권에서 10000원에 B회사를 1주를 빌려 매도한 후, 9000원으로 시가가 하락하자 매수한 후 다시 갚아 1000원의 차익을 가지게 되었다 '
    },
    {
        knowledge: '자사주 ',
        contents: '기업이 보유하고 있는 자사의 주식 \n 용례: KT는 주가 안정을 통한 주주가치 제고를 목적으로 3000억원 규모의 자사주를 매입하기로 공시했다'
    },
    {
        knowledge: '주주총회',
        contents: '주식회사의 의결권을 가진 주주들이 모여 회사의 중요한 사안을 논의하는 최고 의사결정회의 \n 용례: 지난 맥쿼리인프라 주주총회에서 박용주 씨를 감독 이사로 선임할 것을 의결했다'
    },
    {
        knowledge: 'EPS',
        contents: '기업이 벌어들이는 순이익을 주식 수로 나눈 지표로 주당순이익으로 부르기도 한다 \n 용례: EPS는 주당 순이익으로 높을수록 기업의 실적이 좋다는 것을 의미하여, 일반적으로 EPS가 높은 주식이 낮은 주식보다 선호된다'
    },
    {
        knowledge: '테마주',
        contents: '주식시장에서 정치 및 사회적 이슈와 관련되어 주가 등락에 영향을 받는 주식 종목 집합 \n 용례: 코로나19 대유행으로 인해 바이오 테마주가 상승하는 경향이 나타났다'
    },
    {
        knowledge: '인덱스 펀드 ',
        contents: '주가지수에 영향력이 큰 종목들 위주로 투자해 주가지수가 상승할 때 이익을 얻는 펀드 \n 용례: 주식에 투자하는 가장 좋은 방법은 인덱스 펀드에 투자하는 것이다.’ – 워렌 버핏 '
    },
    {
        knowledge: '선물',
        contents: '일정한 상품 또는 자산을 현재의 가격으로 미래의 일정 시점에 매수할 것을 약정한 거래  \n 용례: 미래의 상품 가격은 그 누구도 완벽하게 예측할 수 없기에 선물은 초보 투자자들이 주의해야 하는 금융 상품이다. 단, 위험이 높은 만큼 수익도 크다'
    },
    {
        knowledge: '증자',
        contents: '기업이 사업을 확장하거나 부채를 갚기 위해 주식을 발행하여 자본금을 증가시키는 행위  \n 용례: 맥쿼리인프라는 2500억원 규모의 신주를 발행하여 새로운 사업에 투자할 예정이다'
    },
    {
        knowledge: '자본 잠식 ',
        contents: '순자산이 자본금보다 더 적은 상태  \n 용례: 일반적으로 자본잠식이 일어나면 상장 폐지 가능성이 높고 기업이 망해간다는 의미로 손을 떼는 것이 좋다'
    },
    {
        knowledge: '액면가',
        contents: '주권에 표시된 가격 \n 용례: 주식에서 액면가는 상법에 의해 100원 이상으로 규정되어 있으며, 투자할 때는 크게 고려하지 않는 경우가 많다'
    },
    {
        knowledge: '우선주 ',
        contents: '의결권이 없는 대신 배당에서 우선권을 가진 주식 \n 용례: 일반적으로 기업들은 12월 31일 기준 주주 명단에 따라 배당하기 때문에 연말에는 높은 배당을 받을 수 있는 우선주가 관심을 받는다'
    }

]

const knowledge_Expert = [
    {
        knowledge: 'ETF ',
        contents: '인덱스 펀드를 거래소에 상장하여 투자자들이 주식처럼 거래할 수 있도록 만든 상품 \n 용례: 나는 올해 KODEX200 ETF 7주를 24만원에 구매했다'
    },
    {
        knowledge: '주식 소각',
        contents: '기업이 자사주를 취득해 소멸시키는 것으로, 발행 주식수를 줄여 주가를 높이는 방법  \n 용례: 일반적으로 주식 소각이 이루어지면 기업의 가치는 동일한데 주식 총수가 줄어들게 되므로 주가가 상승한다'
    },
    {
        knowledge: '이동평균선',
        contents: '일정기간 동안의 주가를 산술 평균한 값인 주가이동평균을 차례로 연결해 만든 선  \n 용례: 이동평균선은 기술적 분석에서 사용되며, 주로 5일 이동평균선의 경우 5일 동안 주가의 평균을 점으로 찍고 이를 이어 표시하는 선이다'
    },
    {
        knowledge: 'PBR ',
        contents: '주가를 주당 순자산으로 나눈 값 \n 용례: PBR은 주가순자산비율로 예를 들어 한 기업의 주가가 PBR이 2라면 일반적으로 주가가 순자산의 2배로 거래된다는 의미로 실제보다 과대평가된 것이다'
    },
    {
        knowledge: 'PER',
        contents: '주가를 EPS(주당순이익)으로 나눈 수치  \n 용례: 일반적으로 PER이 낮은 주식은 저평가되었다는 의미로, PER이 높은 주식보다 선호된다'
    },
    {
        knowledge: '시간 외 거래 ',
        contents: '주식 시장 폐장 이후 이루어지는 주식 거래 \n 용례: 장전 시간외 거래는 우리나라 기준으로 8시 30분부터 8시 40분까지 개장 전 전날 종가로 주식을 거래할 수 있는 제도이다'
    },
    {
        knowledge: '서킷브레이커 ',
        contents: '주식시장의 일시적인 거래 중단 제도로, 과열된 주식시장을 진정시키기 위한 제도 \n  용례: 서킷브레이커는 주식시장이 과열되었을 때 발동되며, 우리나라의 경우 발동 즉시 30분간 거래가 중지되며, 지난 20년간 발동 횟수가 12번에 불과하다 '

    },
    {
        knowledge: '액면분할 ',
        contents: '기업의 자본금 증자 없이 어떤 주식의 액면가격을 일정 비율로 분할하여 발행주식의 수를 늘리는 것 \n 용례: A회사는 2:1 비율의 액면분할을 공시했고, 이는 현재 시가 만 원의 1주를 5천원의 2주로 나누는 것이다'
    },
    {
        knowledge: '기업공개(IPO)',
        contents: '기업이 주식 상장을 목적으로 처음으로 외부 투자자들에게 주식을 공개 매도하는 행위  \n 용례: 빅히트 엔터테인먼트는 지난 10월 5일 기업공개를 진행하기 위해 신주 713만 주를 발행했다'
    },
    {
        knowledge: '레버리지 인덱스 펀드 ',
        contents: '선물 등 위험성이 높은 상품에 투자해 주가 지수보다 높은 수익률을 내는 것을 목표로 하는 펀드 \n  용례: KODEX 레버리지는 KOSPI 200 지수 변동률의 2배를 따라가는 것을 목적으로 하는 펀드로, KOSPI200 지수를 그대로 따라가는 KODEX200보다 손실과 이익 모두 2배가 될 수 있는 가능성이 높다'
    },
    {
        knowledge: '인버스 펀드 ',
        contents: '공매도 등을 통해 주가 지수가 하락할 때 이익을 거두는 펀드 \n 용례: 일반적으로 경기가 안 좋을수록 주가 지수가 하락해 인덱스 펀드에 대한 투자가 증가하는 경향이 나타나지만, 2020년은 코로나19 대유행에도 불구하고 3월 이후 주가지수가 상승하는 경향이 나타났다'
    },
    {
        knowledge: '감자',
        contents: '주로 자본잠식을 벗어나기 위해 기업이 주주들이 보유하고 있는 주식 수를 줄여 자본금을 감소시키는 행위  \n 용례: 아시아나항공은 3대 1의 비율로 무상감자를 진행했는데, 이는 3주를 가지고 있는 주주는 1주를 가지게 되는 셈이다'
    }
]

const startButtonEasy = document.getElementById('ezquizstart-btn')
const startButtonMed = document.getElementById('medquizstart-btn')
const startButtonExp = document.getElementById('expquizstart-btn')
const startButtonHyb = document.getElementById('hybquizstart-btn')

const nextButton = document.getElementById('next-btn')
const resetButton = document.getElementById('reset-btn')

const questionContainerElement = document.getElementById('question-container')
const knowledgeContainerElement = document.getElementById('knowledge-container')

const nextKnowButton = document.getElementById('nextknowledge-btn')
const resetKnowButton = document.getElementById('resetknowledge-btn')

var isHybStart = new Boolean(false)
var isThisEasy = new Boolean(false)
var isThisMed = new Boolean(false)
var isThisExp = new Boolean(false)

const knowButtonEasy = document.getElementById('ezknowledgestart-btn')
const knowButtonMed = document.getElementById('medknowledgestart-btn')
const knowButtonExp = document.getElementById('expknowledgestart-btn')

const site0Button = document.getElementById('site0-btn')
const site1Button = document.getElementById('site1-btn')
const site0Explain = document.getElementById('site0-explain')
const site1Explain = document.getElementById('site1-explain')

const menuQuestionButton = document.getElementById('menu-question')
const menuKnowledgeButton = document.getElementById('menu-knowledge')
const menuBookmarkButton = document.getElementById('menu-bookmark')
const menuReferenceButton = document.getElementById('menu-reference')

//북마크 btn
const bookmarkButton = document.getElementById('bookmark-btn')
const resetBookmarkButton = document.getElementById('resetbookmark')

//페이지 설명 텍스트
const StudyPageTitleText = document.getElementById('study-title-text')
const StudyPageText = document.getElementById('study-text')
const QuizPageTitleText = document.getElementById('quiz-title-text')
const QuizPageText = document.getElementById('quiz-text')

//목록 관련
const ListContainer = document.getElementById('list_container')
const ListTitle = document.getElementById('list_title')
const ListContent = document.getElementById('list_content')
const Container = document.getElementById('container')

//팝업창
const bookmarkpopup = document.getElementById('popup')
const Popup_title = document.getElementById('popup_text_title')
const Popup_content = document.getElementById('popup_text_content')
const Popup_closebtn = document.getElementById('popup_close')
const list1 = document.getElementById('list1')
const list2 = document.getElementById('list2')
const list3 = document.getElementById('list3')
const list4 = document.getElementById('list4')
const list5 = document.getElementById('list5')
const list6 = document.getElementById('list6')
const list7 = document.getElementById('list7')
const list8 = document.getElementById('list8')
const list9 = document.getElementById('list9')
const list10 = document.getElementById('list10')
const list11 = document.getElementById('list11')
const list12 = document.getElementById('list12')
const list13 = document.getElementById('list13')
const list14 = document.getElementById('list14')
const list15 = document.getElementById('list15')

//퀴즈 결과 확인 팝업창
const QuizResult = document.getElementById('QuizResult')
const ResultCloseBtn = document.getElementById('result_close')
const ResultText = document.getElementById('result')
const ResultList1 = document.getElementById('result_list1')
const ResultList2 = document.getElementById('result_list2')
const ResultList3 = document.getElementById('result_list3')
const ResultList4 = document.getElementById('result_list4')
const ResultList5 = document.getElementById('result_list5')
var result_list = []
var RightCount = 0
var WrongCount = 0
ResultCloseBtn.addEventListener('click', function () {
    QuizResult.classList.add('hide')
    RightCount = 0
    WrongCount = 0
    result_list = []
})

let shuffledQuestions, currentQuestionIndex // 두개는 랜덤 위한 변수들 . let으로 하면 redefined later.
let shuffledKnowledge, currentKnowledgeIndex
let shuffledQuestions_Easy, shuffledQuestions_Med, shuffledQuestions_Exp

const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

const knowledgeElement = document.getElementById('knowledge')
const knowledgeContents = document.getElementById('knowledge-content')

startButtonEasy.addEventListener('click', StartEasyGame)
startButtonMed.addEventListener('click', StartMedGame)
startButtonExp.addEventListener('click', StartExpGame)
startButtonHyb.addEventListener('click', StartHybGame)

knowButtonEasy.addEventListener('click', StartEasyKnowledge)
knowButtonMed.addEventListener('click', StartMedKnowledge)
knowButtonExp.addEventListener('click', StartExpKnowledge)

bookmarkButton.addEventListener('click', SaveKnowledge)

nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    SetNextQuestion()
})
resetButton.addEventListener('click', ResetGame)

menuQuestionButton.addEventListener('click', QuestionModeOn)
menuKnowledgeButton.addEventListener('click', KnowledgeModeOn)
menuBookmarkButton.addEventListener('click', BookmarkModeOn)
menuReferenceButton.addEventListener('click',ReferenceModeOn)

nextKnowButton.addEventListener('click', () => {
    currentKnowledgeIndex++
    SetNextKnowledge()
})

resetKnowButton.addEventListener('click', ResetKnowledge)
resetBookmarkButton.addEventListener('click', ResetBookmark)

Popup_closebtn.addEventListener('click', ClosePopup)
list1.addEventListener('click', function () { openPopup(BookMark_Knowledge[0].Knowledge, BookMark_Knowledge[0].Content)})
list2.addEventListener('click', function () { openPopup(BookMark_Knowledge[1].Knowledge, BookMark_Knowledge[1].Content)})
list3.addEventListener('click', function () { openPopup(BookMark_Knowledge[2].Knowledge, BookMark_Knowledge[2].Content)})
list4.addEventListener('click', function () { openPopup(BookMark_Knowledge[3].Knowledge, BookMark_Knowledge[3].Content)})
list5.addEventListener('click', function () { openPopup(BookMark_Knowledge[4].Knowledge, BookMark_Knowledge[4].Content)})
list6.addEventListener('click', function () { openPopup(BookMark_Knowledge[5].Knowledge, BookMark_Knowledge[5].Content)})
list7.addEventListener('click', function () { openPopup(BookMark_Knowledge[6].Knowledge, BookMark_Knowledge[6].Content)})
list8.addEventListener('click', function () { openPopup(BookMark_Knowledge[7].Knowledge, BookMark_Knowledge[7].Content)})
list9.addEventListener('click', function () { openPopup(BookMark_Knowledge[8].Knowledge, BookMark_Knowledge[8].Content)})
list10.addEventListener('click', function () { openPopup(BookMark_Knowledge[9].Knowledge, BookMark_Knowledge[9].Content) })
list11.addEventListener('click', function () { openPopup(BookMark_Knowledge[10].Knowledge, BookMark_Knowledge[10].Content) })
list12.addEventListener('click', function () { openPopup(BookMark_Knowledge[11].Knowledge, BookMark_Knowledge[11].Content) })
list13.addEventListener('click', function () { openPopup(BookMark_Knowledge[12].Knowledge, BookMark_Knowledge[12].Content) })
list14.addEventListener('click', function () { openPopup(BookMark_Knowledge[13].Knowledge, BookMark_Knowledge[13].Content) })
list15.addEventListener('click', function () { openPopup(BookMark_Knowledge[14].Knowledge, BookMark_Knowledge[14].Content) })


function ClosePopup() {
    bookmarkpopup.classList.add('hide')
}

function openPopup(knowledge, content) {
    bookmarkpopup.classList.remove('hide')
    Popup_title.innerText = knowledge
    Popup_content.innerText = content
}

function QuestionModeOn()
{
    //#. Quiz Mode Activate
    ResetGame()

    //#. Knowledge mode disable 
    ResetKnowledge()
    knowButtonEasy.classList.add('hide')
    knowButtonMed.classList.add('hide')
    knowButtonExp.classList.add('hide')
    
    //공부 텍스트 hide
    StudyPageTitleText.classList.add('hide')
    StudyPageText.classList.add('hide')

    //#.참고 사이트 Disable
    site0Button.classList.add('hide')
    site1Button.classList.add('hide')
    site0Explain.classList.add('hide')
    site1Explain.classList.add('hide')

    //#. Bookmark disable
    ListContent.classList.add('hide')
    ListTitle.classList.add('hide')
    ListContainer.classList.add('hide')
    Container.classList.remove('hide')
    resetBookmarkButton.classList.add('hide') // ★ 초기화

}

function KnowledgeModeOn()
{
    //#. Knowledge mode activate
    ResetKnowledge()

    //#. Quiz Mode disable
    ResetGame()
    startButtonEasy.classList.add('hide')
    startButtonMed.classList.add('hide')
    startButtonExp.classList.add('hide')
    startButtonHyb.classList.add('hide')

    //퀴즈 텍스트 hide
    QuizPageTitleText.classList.add('hide')
    QuizPageText.classList.add('hide')

    //#. 참고사이트 disable
    site0Button.classList.add('hide')
    site1Button.classList.add('hide')
    site0Explain.classList.add('hide')
    site1Explain.classList.add('hide')

    //#. Bookmark disable
    ListContent.classList.add('hide')
    ListTitle.classList.add('hide')
    ListContainer.classList.add('hide')
    Container.classList.remove('hide')
    resetBookmarkButton.classList.add('hide') // ★ 초기화
}

function ReferenceModeOn() // 여기 hide 부분 추가 필요 
{
    //#.Quiz disable
    ResetGame()
    startButtonEasy.classList.add('hide')
    startButtonMed.classList.add('hide')
    startButtonExp.classList.add('hide')
    startButtonHyb.classList.add('hide')
    QuizPageTitleText.classList.add('hide')
    QuizPageText.classList.add('hide')

    //#. Knowledge disable
    ResetKnowledge()
    knowButtonEasy.classList.add('hide')
    knowButtonMed.classList.add('hide')
    knowButtonExp.classList.add('hide')

    StudyPageTitleText.classList.add('hide')
    StudyPageText.classList.add('hide')

    //#. Reference Activate
    site0Button.classList.remove('hide')
    site1Button.classList.remove('hide')
    site0Explain.classList.remove('hide')
    site1Explain.classList.remove('hide')

    //#. Bookmark disable
    ListContent.classList.add('hide')
    ListTitle.classList.add('hide')
    ListContainer.classList.add('hide')
    Container.classList.remove('hide')
    resetBookmarkButton.classList.add('hide') // ★ 초기화

}

function BookmarkModeOn() {
    startButtonEasy.classList.add('hide') // 난이도 별로 버튼 이제 세개 만들어야 함. 
    startButtonMed.classList.add('hide')
    startButtonExp.classList.add('hide')
    startButtonHyb.classList.add('hide')
    nextButton.classList.add('hide')
    resetButton.classList.add('hide')
    ResetGame()

    questionContainerElement.classList.add('hide')
    QuizPageTitleText.classList.add('hide')
    QuizPageText.classList.add('hide')
    StudyPageTitleText.classList.add('hide')
    StudyPageText.classList.add('hide')
    knowButtonEasy.classList.add('hide')
    knowButtonMed.classList.add('hide')
    knowButtonExp.classList.add('hide')

    ResetKnowledge()

    site0Explain.classList.add('hide')
    site1Explain.classList.add('hide')

    Container.classList.add('hide')
    ListContent.classList.remove('hide')
    ListTitle.classList.remove('hide')
    ListContainer.classList.remove('hide')
    resetBookmarkButton.classList.remove('hide') // ★ 초기화

    get_bookmark_num()
    GetSaveKnowledge()

}


function ResetGame() // resetbutton 누를때 실행되는 함수 
{
    currentQuestionIndex = 0
    startButtonEasy.classList.remove('hide') // 난이도 별로 버튼 이제 세개 만들어야 함. 
    startButtonMed.classList.remove('hide')
    startButtonExp.classList.remove('hide')
    startButtonHyb.classList.remove('hide')
    nextButton.classList.add('hide')
    resetButton.classList.add('hide')
    questionContainerElement.classList.add('hide')
    ClearStatusClass(document.body)

    QuizPageTitleText.classList.remove('hide')
    QuizPageText.classList.remove('hide')

    isHybStart = false
    isThisEasy = false
    isThisMed = false
    isThisExp = false

    //결과 확인 창 on
    if (RightCount != 0 || WrongCount != 0) {
        QuizResult.classList.remove('hide')
        ResultText.innerText = RightCount + "/5"

        for (var i = 0; i < 5; i++) {
            if (i == 0) ResultList1.innerText = result_list[0]
            if (i == 1) ResultList2.innerText = result_list[1]
            if (i == 2) ResultList3.innerText = result_list[2]
            if (i == 3) ResultList4.innerText = result_list[3]
            if (i == 4) ResultList5.innerText = result_list[4]
        }
    }
}

function ResetKnowledge()
{
    currentKnowledgeIndex = 0
    knowButtonEasy.classList.remove('hide')
    knowButtonMed.classList.remove('hide')
    knowButtonExp.classList.remove('hide')
    knowledgeContainerElement.classList.add('hide')
    resetKnowButton.classList.add('hide')
    nextKnowButton.classList.add('hide')
    bookmarkButton.classList.add('hide')

    StudyPageTitleText.classList.remove('hide')
    StudyPageText.classList.remove('hide')
    
}

function StartEasyGame() // Easy
{   // sort는 괄호 안 매개변수로 함수 받음. 함수 없으면 배열 element들 문자열로 취급후 유니코드로 순서 정렬. -> 이 함수는 a,b 두개의 엘레멘트 입력받을 경우 반환값이 0보다 크면 b가 a보다 앞에오고, 0보다 작으면 a가 b보다 앞에 옴. 0이면 a,b 순서 안바꿈.
    startButtonEasy.classList.add('hide') // 시작버튼을 사라지게 해줌. 나중에 세개 버튼 만들어서 난이도 버튼 각각 만들 것.
    startButtonMed.classList.add('hide')
    startButtonExp.classList.add('hide')
    startButtonHyb.classList.add('hide')
    QuizPageTitleText.classList.add('hide')
    QuizPageText.classList.add('hide') 
    shuffledQuestions = questions_Easy.sort(() => Math.random() - .5) // 음수면 특정한 방법으로 sort. 양수면 다른 방법으로 함. -> Sort things by negative number being one-way and positive being the other way. -> 즉 난수는 0 아래 or 이상 됨. Math.random()하면 0에서 1사이 난수 생성 따라서 거기에 -0.5 해주면 50% 확률로 0보다 낮거나 높거나. 따라서 셔플됨 
    //shuffledQuestions_Easy = questions_Easy.sort(() => Math.random() - .5) // ★
    currentQuestionIndex = 0 // shuffle된 questions 배열에서 바로 첫번째 질문 할거니 0으로 대입 
    questionContainerElement.classList.remove('hide') // hide 클래스 제거해줌. 따라서 이 함수 실행되면 나타날 것임.
    SetNextQuestion()

    //isThisEasy = true
}

function StartMedGame() // Medium
{
    startButtonEasy.classList.add('hide') 
    startButtonMed.classList.add('hide')
    startButtonExp.classList.add('hide')
    startButtonHyb.classList.add('hide')
    QuizPageTitleText.classList.add('hide')
    QuizPageText.classList.add('hide')
    shuffledQuestions = questions_Medium.sort(() => Math.random() - .5)
    //shuffledQuestions_Med = questions_Medium.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    SetNextQuestion()

    //isThisMed = true
}

function StartExpGame() // Expert
{
    startButtonEasy.classList.add('hide')
    startButtonMed.classList.add('hide')
    startButtonExp.classList.add('hide')
    startButtonHyb.classList.add('hide')
    QuizPageTitleText.classList.add('hide')
    QuizPageText.classList.add('hide')
    shuffledQuestions = questions_Expert.sort(() => Math.random() - .5)
    //shuffledQuestions_Exp = questions_Expert.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    SetNextQuestion()

    //isThisExp = true
}

function StartHybGame() // ★ 심화 알고리즘 퀴즈 출제 
{
    isHybStart = true

    //#. Remove buttons
    startButtonEasy.classList.add('hide')
    startButtonMed.classList.add('hide')
    startButtonExp.classList.add('hide')
    startButtonHyb.classList.add('hide')
    QuizPageTitleText.classList.add('hide')
    QuizPageText.classList.add('hide')

    //#. 퀴즈 출제
    shuffledQuestions_Easy = questions_Easy.sort(() => Math.random() - .5)
    shuffledQuestions_Med = questions_Medium.sort(() => Math.random() - .5)
    shuffledQuestions_Exp = questions_Expert.sort(() => Math.random() - .5)

    isThisEasy = true
    currentQuestionIndex = 0 
    questionContainerElement.classList.remove('hide')
    SetNextQuestion()
}

function StartEasyKnowledge() 
{
    bookmarkButton.classList.remove('hide')

    StudyPageTitleText.classList.add('hide')
    StudyPageText.classList.add('hide')

    knowButtonEasy.classList.add('hide')
    knowButtonMed.classList.add('hide')
    knowButtonExp.classList.add('hide')

    nextKnowButton.classList.remove('hide')
    shuffledKnowledge = knowledge_Easy.sort(() => Math.random() - .5)
    currentKnowledgeIndex = 0
    knowledgeContainerElement.classList.remove('hide')
    SetNextKnowledge()
}

function StartMedKnowledge() 
{
    bookmarkButton.classList.remove('hide')

    StudyPageTitleText.classList.add('hide')
    StudyPageText.classList.add('hide')

    knowButtonEasy.classList.add('hide')
    knowButtonMed.classList.add('hide')
    knowButtonExp.classList.add('hide')

    nextKnowButton.classList.remove('hide')
    shuffledKnowledge = knowledge_Medium.sort(() => Math.random() - .5)
    currentKnowledgeIndex = 0
    knowledgeContainerElement.classList.remove('hide')
    SetNextKnowledge()

}

function StartExpKnowledge()
{
    bookmarkButton.classList.remove('hide')

    StudyPageTitleText.classList.add('hide')
    StudyPageText.classList.add('hide')

    knowButtonEasy.classList.add('hide')
    knowButtonMed.classList.add('hide')
    knowButtonExp.classList.add('hide')

    nextKnowButton.classList.remove('hide')
    shuffledKnowledge = knowledge_Expert.sort(() => Math.random() - .5)
    currentKnowledgeIndex = 0
    knowledgeContainerElement.classList.remove('hide')
    SetNextKnowledge()

}

function SetNextQuestion() // nextButton 누르면 setNextQuestion 실행됨.
{                          
    ResetState()
    //ShowQuestion(shuffledQuestions[currentQuestionIndex])
    if (isHybStart)
    {
        if (isThisEasy)
        {
            ShowQuestion(shuffledQuestions_Easy[currentQuestionIndex])
        }  
        else if (isThisMed)
        {
            ShowQuestion(shuffledQuestions_Med[currentQuestionIndex])
        }
        else if (isThisExp)
        {
            ShowQuestion(shuffledQuestions_Exp[currentQuestionIndex])
        }
       
    }
    else
    {
        ShowQuestion(shuffledQuestions[currentQuestionIndex])
    }


}

function SetNextKnowledge()  
{
    ShowKnowledge(shuffledKnowledge[currentKnowledgeIndex])
    // ResetState()
}

var ResultOfQuestion

function ShowQuestion(question) // question은 questions 배열 쓸 것임.
{
    questionElement.innerText = question.question // questionElement는 getelemenyById 통해서 html에서 question 섹션 불러옴
    question.answers.forEach(answer => { // 화살표 함수: 함수 간단하게 표시한거임. 
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct // data attribute를 이 button에 추가해줄것임(dataset). 그리고 정답일때만 이 코드 실행하는 이유는 데이터에 굳이 틀린 답 안넣는게 좋음 왜냐하면 boolean이 아니라 그냥 string이기에 뭐가 맞고 틀린지 판단 힘듬 -> 즉 답 맞을때만 data에 넣어주는게 훨씬 정답 분간 쉬움 

            //퀴즈 정답 단어 추출
            if (answer.text == 'O' || answer.text == 'x') {
                OXQuizText(question.question)
            } else {
                ResultOfQuestion = answer.text
            }
            
        }

        button.addEventListener('click', SelectAnswer)
        answerButtonsElement.appendChild(button)
    })

}

function OXQuizText(text) {
    if (text == '주가가 변동하지 않거나 변동의 폭이 극히 작은 상태를 "보합"이라 한다') ResultOfQuestion = '보합'
    else if (text == '주식의 수량이 변하지 않았을 때, 주가가 오르면 기업의 자본금도 같이 상승한다') ResultOfQuestion = '자본금'
    else if (text == '일반적으로 특정 기업의 EPS가 높다는 것은 실적이 좋다는 것을 의미한다  ') ResultOfQuestion = 'EPS'
    else if (text == '액면가는 주권에 표시된 가격으로, 투자할 때 중요시되는 요소이다  ') ResultOfQuestion = '액면가'
    else if (text == '일반적으로 선물은 위험성이 높다') ResultOfQuestion = '선물'
    else if (text == ' 일정기간 동안의 주가를 산술 평균한 값인 주가이동평균을 차례로 연결해 만든 선을 이동평균선이라 한다 ')ResultOfQuestion='이동평균선'
}

function SelectAnswer(e) //event를 파라미터로 사용 
{
    const selectedButton = e.target // 사용자가 클릭한 버튼
    const correct = selectedButton.dataset.correct 

    //맞은 문제 수 카운트(결과 창)
    if (correct) {
        RightCount += 1
        var result_text = ResultOfQuestion + " |  정답"
        result_list.push(result_text)

        //#. Hybrid 모드 한정 
        if (isHybStart) {
            if (isThisEasy) {
                isThisEasy = false
                isThisMed = true
                isThisExp = false
            }
            else if (isThisMed) {
                isThisEasy = false
                isThisMed = false
                isThisExp = true
            }
        }

    } else {
        WrongCount += 1
        var result_text = ResultOfQuestion + " |  오답"
        result_list.push(result_text)

        //#. Hybrid 모드 한정 
        if (isHybStart) {
            if (isThisExp) {
                isThisEasy = false
                isThisMed = true
                isThisExp = false
            }
            else if (isThisMed) {
                isThisEasy = true
                isThisMed = false
                isThisExp = false
            }
        }
    }
    
    SetStatusClass(document.body, correct) // body의 set the status class.
    Array.from(answerButtonsElement.children).forEach(button => { // 모든 버튼들
        SetStatusClass(button, button.dataset.correct) // dataset의 correct 확인할것임 
    })
    nextButton.classList.remove('hide')

    if (isHybStart)
    {
        if (isThisEasy) {
            shuffledQuestions_Easy.splice(currentQuestionIndex, 1)
        }
        else if (isThisMed) {
            shuffledQuestions_Med.splice(currentQuestionIndex, 1)
        }
        else if (isThisExp) {
            shuffledQuestions_Exp.splice(currentQuestionIndex, 1)
        }
    }

    if (5 > currentQuestionIndex + 1) // curQuesIndex는 next버튼 누를때마다 1씩 올라가는데, 이게 현재 있는 문제보다 양이 적으면 계속 진행, 더 많으면 끝났다는거니 문제 재진행.
    {   // 문제 출제 개수 줄이려면 여기서 설정 
        nextButton.classList.remove('hide')

    }
    else
    {
        //  startButtonEasy.classList.remove('hide')
        nextButton.classList.add('hide')
        resetButton.classList.remove('hide')
    }
}

function ResetState() //다음문제 넘어가는 함수에서 form이나 질문이나 버튼 등 다 새로 리셋시켜주는 함수 
{
    ClearStatusClass(document.body)
    nextButton.classList.add('hide') // 다음 넘어갔으면 그 다음의 버튼들은 또 hide 되어야함 
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function SetStatusClass(element, correct) {
    ClearStatusClass(element)
    if (correct) { // 문제가 맞았을 때.
        element.classList.add('correct')
    }
    else
    {
        element.classList.add('wrong')       
    }
}

function ClearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}


var current_knowledge_title;
var current_knowledge_content;

function ShowKnowledge(knowledge){ 
    knowledgeElement.innerText = knowledge.knowledge
    knowledgeContents.innerText = knowledge.contents

    //현재 사용자가 보고 있는 지식과 설명을 변수에 넣음
    current_knowledge_title = knowledge.knowledge
    current_knowledge_content = knowledge.contents

    if (5 <= currentKnowledgeIndex + 1) // 여기서 출제 개수 조절 
    {
        nextKnowButton.classList.add('hide')
        resetKnowButton.classList.remove('hide')
    }
   
}


function ClosePopup() {
    bookmarkpopup.classList.add('hide')
}
var firebaseConfig = {
    apiKey: "AIzaSyBrt6J2tDMa1oK_wJeiWklBxi8nkYpF8ZU",
    authDomain: "designthinking-37503.firebaseapp.com",
    databaseURL: "https://designthinking-37503.firebaseio.com",
    projectId: "designthinking-37503",
    storageBucket: "designthinking-37503.appspot.com",
    messagingSenderId: "301432580952",
    appId: "1:301432580952:web:33864077a5f9bcd826532d",
    measurementId: "G-BCJB2Q0F73"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var database = firebase.database();
var knowledge_bookmark_num = 0;

function SaveKnowledge()
{
    get_bookmark_num()
    knowledge_bookmark_num += 1
    firebase.database().ref('bookmark/'+knowledge_bookmark_num).set({
        Knowledge : current_knowledge_title,
        Content : current_knowledge_content
    })
    set_bookmark_num()
}

function get_bookmark_num() {
    var snapshot
    return firebase.database().ref('bookmark_num').once('value').then((snapshot) => {
        var num = (snapshot.val()) || 0
        console.log(num)
        knowledge_bookmark_num = parseInt(num)
    })
} 

function set_bookmark_num() {
    firebase.database().ref('bookmark_num').set(knowledge_bookmark_num)
}

var BookMark_Knowledge = []

function GetSaveKnowledge() {
    BookMark_Knowledge = []
    get_bookmark_num()
    for(var i = 1; i <= knowledge_bookmark_num; i++) {
           GetKnowledge(i)   
    }
}

function GetKnowledge(i) {
    var t
    return firebase.database().ref('bookmark/' + i).once('value').then((t) => {
        var gettitle = (t.val().Knowledge) || 'Anonymous'
        var getcontent = (t.val().Content) || 'Anonymous'
        var obj = { Knowledge: gettitle, Content: getcontent }
        BookMark_Knowledge.push(obj)
        if (i == 1) {
            list1.classList.remove('hide')
            list1.innerText = gettitle
        } else if (i == 2) {
            list2.classList.remove('hide')
            list2.innerText = gettitle
        } else if (i == 3) {
            list3.classList.remove('hide')
            list3.innerText = gettitle
        } else if (i == 4) {
            list4.classList.remove('hide')
            list4.innerText = gettitle
        } else if (i == 5) {
            list5.classList.remove('hide')
            list5.innerText = gettitle
        } else if (i == 6) {
            list6.classList.remove('hide')
            list6.innerText = gettitle
        } else if (i == 7) {
            list7.classList.remove('hide')
            list7.innerText = gettitle
        } else if (i == 8) {
            list8.classList.remove('hide')
            list8.innerText = gettitle
        } else if (i == 9) {
            list9.classList.remove('hide')
            list9.innerText = gettitle
        } else if (i == 10) {
            list10.classList.remove('hide')
            list10.innerText = gettitle
        } else if (i == 11) {
            list11.classList.remove('hide')
            list11.innerText = gettitle
        } else if (i == 12) {
            list12.classList.remove('hide')
            list12.innerText = gettitle
        } else if (i == 13) {
            list13.classList.remove('hide')
            list13.innerText = gettitle
        } else if (i == 14) {
            list14.classList.remove('hide')
            list14.innerText = gettitle
        }
    })
}

function ResetBookmark() {
    //북마크 초기화
    for (var i = 1; i <= knowledge_bookmark_num; i++) {
        if (i == 1) {
            list1.classList.add('hide')
        } else if (i == 2) {
            list2.classList.add('hide')
        } else if (i == 3) {
            list3.classList.add('hide')
        } else if (i == 4) {
            list4.classList.add('hide')
        } else if (i == 5) {
            list5.classList.add('hide')
        } else if (i == 6) {
            list6.classList.add('hide')
        } else if (i == 7) {
            list7.classList.add('hide')
        } else if (i == 8) {
            list8.classList.add('hide')
        } else if (i == 9) {
            list9.classList.add('hide')
        } else if (i == 10) {
            list10.classList.add('hide')
        } else if (i == 11) {
            list11.classList.add('hide')
        } else if (i == 12) {
            list12.classList.add('hide')
        } else if (i == 13) {
            list13.classList.add('hide')
        } else if (i == 14) {
            list14.classList.add('hide')
        }
    }
    firebase.database().ref('bookmark_num').set(0)
    knowledge_bookmark_num = 0
    firebase.database().ref('bookmark').set(null)
    GetSaveKnowledge()
}

