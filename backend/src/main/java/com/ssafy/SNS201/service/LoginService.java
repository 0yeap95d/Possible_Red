package com.ssafy.SNS201.service;

import com.ssafy.SNS201.dto.Member;

public interface LoginService {
    public Member login (String email, String pwd);
}
