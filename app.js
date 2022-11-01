const admin = require('firebase-admin');
const serviceAccount = require('./fcmstudy-45dc4-firebase-adminsdk-jnr0z-f8b15dc49e.json');


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// 디바이스 토큰 (서비스의 onNewToken에서 받은 토큰 문자열) -> 안드로이드 프로젝트에서 받은 토큰
const registrationToken = "fZiVJIx1Se6way1EABGENY:APA91bFCicOVAjEkWKTR1GGTJr3TAXnoDVw_lPxAV67sFO1Ywja5jaJzDFJoDozwAWXuyPlR7yiX1r0VOxhkPJLVk5AnhXga0GNyHQpsCzX36t47IGbJLQV7xLGCVys_XN84eSxtJ1OX";

// 메시지 객체 (구조가 정해져있으므로 딱딱 맞춰서 데이터 기입 필요)
const message = {
    // 노티바용 제목, 본문
    notification: {
        title: "my title",
        body: "my body",
    },
    // 추가 데이터
    data: {
        score: '850',
        time: '2:45'
    },
    token: registrationToken
};

// 비동기
// send가 반환하는
admin.messaging().send(message)
    .then((response) => {
        console.log('Successfully sent message:', response);
    })
    .catch((error) => {
        console.log('Error sending message:', error);
    });