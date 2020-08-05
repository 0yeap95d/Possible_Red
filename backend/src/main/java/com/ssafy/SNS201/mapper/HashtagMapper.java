package com.ssafy.SNS201.mapper;


import com.ssafy.SNS201.dto.Hashtag;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface HashtagMapper {
    public List<Hashtag> selectHashtag(int postNo);
    public boolean insertHashtag(Hashtag hashtag);
    public boolean deleteHashtag(int hashtagNo);
}
