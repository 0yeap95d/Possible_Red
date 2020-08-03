package com.ssafy.SNS201.mapper;

import com.ssafy.SNS201.dto.Mission;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface MissionMapper {
    public List<Mission> selectMission();
    public Mission selectMissionByNo(int missionNo);
    public int insertMission(Mission mission);
    public int updateMission(Mission mission);
    public int deleteMission(int missionNo);
}
