import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserDetail({ userId }) {
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        // 특정 유저의 세부 내용 조회
        axios.get(`/api/auth/${userId}`)
            .then(res => {
                console.log('받아온 데이터:', res.data);
                setUser(res.data);
                setError('');
            })
            .catch(err => {
                console.error(err);
                setError('포트폴리오 정보를 가져오는 데 오류가 발생했습니다.');
            });
    }, [userId]);

    if (error) {
        return <div style={{ color: 'red' }}>{error}</div>; // 오류 메시지 표시
    }

    if (!user) {
        return <div>로딩 중...</div>; // 데이터 로딩 중 표시
    }

    return (
        <div>
            <h2>유저 상세 정보</h2>
            <p><strong>유저 이름:</strong> {user.name}</p>
            <p><strong>이메일:</strong> {user.email}</p>
            <p><strong>닉네임:</strong> {user.nickname}</p>
            <p><strong>프사 url:</strong> {user.profilePic}</p>
        </div>
    );
}

export default UserDetail;
