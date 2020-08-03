package com.ssafy.SNS201.service;

import com.ssafy.SNS201.dto.Entry;
import com.ssafy.SNS201.dto.Follow;
import com.ssafy.SNS201.mapper.EntryMapper;
import com.ssafy.SNS201.mapper.FollowMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class FollowServiceImpl implements FollowService {

    @Autowired
    private FollowMapper mapper;

    @Override
    public List<Follow> findAllFollowMe() {
        return mapper.selectFollowMe();
    }

    @Override
    public List<Follow> findAllFollowYou() {
        return mapper.selectFollowYou();
    }

    @Override
    public boolean addFollow(Follow follow) { return mapper.insertFollow(follow) == 1; }

    @Override
    @Transactional
    public boolean removeFollow(int followNo) {
        return mapper.deleteFollow(followNo) == 1;
    }
}
