package com.ssafy.SNS201.service;

import com.ssafy.SNS201.dto.Hashtag;

import java.util.List;

public interface HashtagService {
    public List<Hashtag> findAllHashtags(int missionNo);
    public boolean addHashtag(Hashtag hashtag);
    public boolean removeHashtag(int hashtagNo);
}
