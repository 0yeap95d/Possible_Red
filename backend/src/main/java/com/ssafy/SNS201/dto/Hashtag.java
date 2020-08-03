package com.ssafy.SNS201.dto;

import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class Hashtag {
    private int hashtagNo;
    private int missionNo;
    private String hashtagContent;
    private int hashtagCnt;

    public int getHashtagNo() {
        return hashtagNo;
    }

    public int getMissionNo() {
        return missionNo;
    }

    public String getHashtagContent() {
        return hashtagContent;
    }

    public int getHashtagCnt() {
        return hashtagCnt;
    }

    public void setHashtagNo(int hashtagNo) {
        this.hashtagNo = hashtagNo;
    }

    public void setMissionNo(int missionNo) {
        this.missionNo = missionNo;
    }

    public void setHashtagContent(String hashtagContent) {
        this.hashtagContent = hashtagContent;
    }

    public void setHashtagCnt(int hashtagCnt) {
        this.hashtagCnt = hashtagCnt;
    }
}
