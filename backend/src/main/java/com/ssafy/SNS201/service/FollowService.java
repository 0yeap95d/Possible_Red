package com.ssafy.SNS201.service;

import com.ssafy.SNS201.dto.Entry;
import com.ssafy.SNS201.dto.Follow;

import java.util.List;

public interface FollowService {
    public List<Follow> findAllFollowMe();
    public List<Follow> findAllFollowYou();
    public boolean addFollow(Follow follow);
    public boolean removeFollow(int followNo);
    public Integer countFollowMe(int memberNo);
    public Integer countFollowYou(int memberNo);
}
