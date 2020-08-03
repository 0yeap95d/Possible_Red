package com.ssafy.SNS201.service;

import com.ssafy.SNS201.dto.Mission;

import java.util.List;

public interface MissionService {
    public List<Mission> findMission();
    public Mission findMissionByNo(int missionNo);
    public boolean addMission(Mission mission);
    public boolean modifyMission(Mission mission);
    public boolean removeMission(int missionNo);
}
