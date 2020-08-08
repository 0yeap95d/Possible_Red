package com.ssafy.SNS201.dto;

import org.springframework.stereotype.Component;

@Component
public class Member {
    private int memberNo;
    private String email;
    private String pwd;
    private String nickname;
    private int point;
    private String stateMent;
    private String memberPhoto;

    public void setMemberNo(int memberNo) {
        this.memberNo = memberNo;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPwd(String pwd) {
        this.pwd = pwd;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public void setPoint(int point) {
        this.point = point;
    }

    public void setStateMent(String stateMent) {
        this.stateMent = stateMent;
    }

    public void setMemberPhotho(String memberPhotho) {
        this.memberPhoto = memberPhotho;
    }

    public int getMemberNo() {
        return memberNo;
    }

    public String getEmail() {
        return email;
    }

    public String getPwd() {
        return pwd;
    }

    public String getNickname() {
        return nickname;
    }

    public int getPoint() {
        return point;
    }

    public String getStateMent() {
        return stateMent;
    }

    public String getMemberPhotho() {
        return memberPhoto;
    }

    @Override
    public String toString() {
        return "Member{" +
                "memberNo=" + memberNo +
                ", email='" + email + '\'' +
                ", pwd='" + pwd + '\'' +
                ", nickname='" + nickname + '\'' +
                ", point=" + point +
                ", stateMent='" + stateMent + '\'' +
                ", memberPhoto='" + memberPhoto + '\'' +
                '}';
    }
}
