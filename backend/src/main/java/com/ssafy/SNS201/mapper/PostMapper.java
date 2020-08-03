package com.ssafy.SNS201.mapper;

import com.ssafy.SNS201.dto.Post;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface PostMapper {
    List<Post> selectPost();
    boolean insertPost(Post post);
    Post selectPostByNo(int postNo);
    boolean updatePost(Post post);
    boolean deletePost(int postNo);
}
