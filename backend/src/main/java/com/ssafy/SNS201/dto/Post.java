package com.ssafy.SNS201.dto;

import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class Post {
    private int postNo;
    private int memberNo;
    private Date postDate;
    private String link;
    private String postContent;
    private int missionNo;

    public int getPostNo() {
        return postNo;
    }

    public void setPostNo(int postNo) {
        this.postNo = postNo;
    }

    public int getMemberNo() {
        return memberNo;
    }

    public void setMemberNo(int memberNo) {
        this.memberNo = memberNo;
    }

    public Date getPostDate() {
        return postDate;
    }

    public void setPostDate(Date postDate) {
        this.postDate = postDate;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public String getPostContent() {
        return postContent;
    }

    public void setPostContent(String postContent) {
        this.postContent = postContent;
    }

    public int getMissionNo() {
        return missionNo;
    }

    public void setMissionNo(int missionNo) {
        this.missionNo = missionNo;
    }
}
