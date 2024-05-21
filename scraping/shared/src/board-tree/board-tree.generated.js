module.exports.boardTree = {
  전공: {
    id: 1,
    경영대학: {
      id: 101,
      경영정보학과: {
        id: 10101,
        학부공지: { id: 1010101 },
        대학원공지: { id: 1010102 },
      },
      경영학부: { id: 10102, 대학공지: { id: 1010201 } },
      국제경영학과: { id: 10103, 학부공지: { id: 1010301 } },
    },
    공과대학: {
      id: 102,
      건축공학과: { id: 10201, 공지사항: { id: 1020101 } },
      건축학과: { id: 10202, 공지사항: { id: 1020201 } },
      공업화학과: { id: 10203, 공지사항: { id: 1020301 } },
      기계공학부: { id: 10204, 공지사항: { id: 1020401 } },
      도시공학과: { id: 10205, 공지사항: { id: 1020501 } },
      신소재공학과: { id: 10206, 공지사항: { id: 1020601 } },
      안전공학과: { id: 10207, 공지사항: { id: 1020701 } },
      토목공학부: { id: 10208, 공지사항: { id: 1020801 } },
      화학공학과: { id: 10209, 공지사항: { id: 1020901 } },
      환경공학과: { id: 10210, 공지사항: { id: 1021001 } },
    },
    농업생명환경대학: {
      id: 103,
      농업경제학과: { id: 10301, 공지사항: { id: 1030101 } },
      목재종이학과: { id: 10302, 공지사항: { id: 1030201 } },
      바이오시스템공학과: { id: 10303, 공지사항: { id: 1030301 } },
      산림학과: { id: 10304, 공지사항: { id: 1030401 } },
      식물의학과: { id: 10305, 공지사항: { id: 1030501 } },
      식물자원학과: { id: 10306, 공지사항: { id: 1030601 } },
      식품생명공학과: { id: 10307, 공지사항: { id: 1030701 } },
      원예학과: { id: 10308, 공지사항: { id: 1030801 } },
      지역건설공학과: { id: 10309, 공지사항: { id: 1030901 } },
      축산학과: { id: 10310, 공지사항: { id: 1031001 } },
      특용식물학과: { id: 10311, 공지사항: { id: 1031101 } },
      환경생명화학과: { id: 10312, 공지사항: { id: 1031201 } },
    },
    사범대학: {
      id: 104,
      교유학과: { id: 10401, 공지사항: { id: 1040101 } },
      국어교육과: { id: 10402, 공지사항: { id: 1040201 } },
      물리교육과: { id: 10403, 공지사항: { id: 1040301 } },
      사회교육과: { id: 10404, 공지사항: { id: 1040401 } },
      생물교육과: { id: 10405, 공지사항: { id: 1040501 } },
      수학교육과: { id: 10406, 공지사항: { id: 1040601 } },
      역사교육과: { id: 10407, 공지사항: { id: 1040701 } },
      영어교육과: { id: 10408, 공지사항: { id: 1040801 } },
      윤리교육과: { id: 10409, 공지사항: { id: 1040901 } },
      지구과학교육과: { id: 10410, 공지사항: { id: 1041001 } },
      지리교육과: { id: 10411, 공지사항: { id: 1041101 } },
      체육교육과: { id: 10412, 공지사항: { id: 1041201 } },
      화학교육과: { id: 10413, 공지사항: { id: 1041301 } },
    },
    사회과학대학: {
      id: 105,
      경제학과: { id: 10501, 공지사항: { id: 1050101 } },
      사회학과: { id: 10502, 공지사항: { id: 1050201 } },
      심리학과: { id: 10503, 공지사항: { id: 1050301 } },
      정치외교학과: { id: 10504, 공지사항: { id: 1050401 } },
      행정학과: { id: 10505, 공지사항: { id: 1050501 } },
    },
    생활과학대학: {
      id: 106,
      소비자학과: { id: 10601, 공지사항: { id: 1060101 } },
      식품영양학과: { id: 10602, 공지사항: { id: 1060201 } },
      아동복지학과: { id: 10603, 공지사항: { id: 1060301 } },
      의류학과: { id: 10604, 공지사항: { id: 1060401 } },
      주거환경학과: { id: 10605, 공지사항: { id: 1060501 } },
    },
    수의과대학: {
      id: 107,
      수의예과: { id: 10701, 공지사항: { id: 1070101 } },
      수의학과: { id: 10702, 공지사항: { id: 1070201 } },
    },
    약학대학: {
      id: 108,
      약학과: { id: 10801, 공지사항: { id: 1080101 } },
      제약학과: { id: 10802, 공지사항: { id: 1080201 } },
    },
    융합학과군: {
      id: 109,
      디자인학과: { id: 10901, 공지사항: { id: 1090101 } },
      조형예술학과: { id: 10902, 공지사항: { id: 1090201 } },
    },
    의과대학: {
      id: 110,
      의예과: { id: 11001, 공지사항: { id: 1100101 } },
      의학과: { id: 11002, 공지사항: { id: 1100201 } },
      간호학과: { id: 11003, 공지사항: { id: 1100301 } },
    },
    인문대학: {
      id: 111,
      고고미술사학과: { id: 11101, 공지사항: { id: 1110101 } },
      국어국문학과: { id: 11102, 공지사항: { id: 1110201 } },
      독일언어문화학과: { id: 11103, 공지사항: { id: 1110301 } },
      러시아언어문화학과: { id: 11104, 공지사항: { id: 1110401 } },
      사학과: { id: 11105, 공지사항: { id: 1110501 } },
      영어영문학과: { id: 11106, 공지사항: { id: 1110601 } },
      중어중문학과: { id: 11107, 공지사항: { id: 1110701 } },
      철학과: { id: 11108, 공지사항: { id: 1110801 } },
      프랑스언어문화학과: { id: 11109, 공지사항: { id: 1110901 } },
    },
    자연과학대학: {
      id: 112,
      물리학과: { id: 11201, 공지사항: { id: 1120101 } },
      미생물학과: { id: 11202, 공지사항: { id: 1120201 } },
      생물학과: { id: 11203, 공지사항: { id: 1120301 } },
      생화학과: { id: 11204, 공지사항: { id: 1120401 } },
      수학과: { id: 11205, 공지사항: { id: 1120501 } },
      정보통계학과: { id: 11206, 공지사항: { id: 1120601 } },
      지구환경과학과: { id: 11207, 공지사항: { id: 1120701 } },
      천문우주학과: { id: 11208, 공지사항: { id: 1120801 } },
      화학과: { id: 11209, 공지사항: { id: 1120901 } },
    },
    전자정보대학: {
      id: 113,
      소프트웨어학부: { id: 11301, 공지사항: { id: 1130101 } },
      전기공학부: { id: 11302, 공지사항: { id: 1130201 } },
      전자공학부: { id: 11303, 공지사항: { id: 1130301 } },
      정보통신공학부: { id: 11304, 공지사항: { id: 1130401 } },
      컴퓨터공학과: { id: 11305, 공지사항: { id: 1130501 } },
      지능로봇공학과: { id: 11306, 공지사항: { id: 1130601 } },
    },
  },
  공통: {
    id: 2,
    충북대학교: {
      id: 201,
      공지사항: { id: 20101 },
      학사장학: { id: 20102 },
      행사세미나: { id: 20103 },
    },
    학생생활관: { id: 202, 공지사항: { id: 20201 } },
    국제교류본부: { id: 203, 공지사항: { id: 20301 } },
    linc사업단: { id: 204, 공지사항: { id: 20401 } },
    sw중심대학사업단: { id: 205, 공지사항: { id: 20501 } },
    취업지원본부: {
      id: 206,
      공지사항: { id: 20601 },
      채용설명회: { id: 20602 },
    },
  },
  학생회: {
    id: 3,
    총학생회: { id: 301, 공지사항: { id: 30101 } },
    "전자정보대학 학생회": { id: 302, 공지사항: { id: 30201 } },
    "소프트웨어학과 학생회": { id: 303, 공지사항: { id: 30301 } },
  },
  동아리: { id: 5 },
};
