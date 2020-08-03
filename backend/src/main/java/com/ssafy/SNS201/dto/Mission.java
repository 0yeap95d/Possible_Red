package com.ssafy.SNS201.dto;

import java.util.Date;

public class Mission {
    private int missionNo; // ai
    private String missionTitle;
    private Date startDate;
    private Date endDate;
    private boolean isStart;
    private int memberNo; // fk
    private int point;
    private int minusPoint;
    private int cutCnt;
    private int joinMem; // count

    public void setMissionNo(int missionNo) {
        this.missionNo = missionNo;
    }

    public void setMissionTitle(String missionTitle) {
        this.missionTitle = missionTitle;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public void setStart(boolean start) {
        isStart = start;
    }

    public void setMemberNo(int memberNo) {
        this.memberNo = memberNo;
    }

    public void setPoint(int point) {
        this.point = point;
    }

    public void setMinusPoint(int minusPoint) {
        this.minusPoint = minusPoint;
    }

    public void setCutCnt(int cutCnt) {
        this.cutCnt = cutCnt;
    }

    public void setJoinMem(int joinMem) {
        this.joinMem = joinMem;
    }

    public int getMissionNo() {
        return missionNo;
    }

    public String getMissionTitle() {
        return missionTitle;
    }

    public Date getStartDate() {
        return startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public boolean isStart() {
        return isStart;
    }

    public int getMemberNo() {
        return memberNo;
    }

    public int getPoint() {
        return point;
    }

    public int getMinusPoint() {
        return minusPoint;
    }

    public int getCutCnt() {
        return cutCnt;
    }

    public int getJoinMem() {
        return joinMem;
    }
}
