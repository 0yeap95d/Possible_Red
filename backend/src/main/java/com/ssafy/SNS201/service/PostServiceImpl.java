package com.ssafy.SNS201.service;

import com.ssafy.SNS201.dto.Post;
import com.ssafy.SNS201.mapper.PostMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostServiceImpl implements PostService{

    @Autowired
    PostMapper mapper;

    @Override
    public List<Post> findAllPosts() { return mapper.selectPost(); }

    @Override
    public boolean addPost(Post p) {
        return mapper.insertPost(p);
    }

    @Override
    public Post findPostByNo(int postNo) {
        return mapper.selectPostByNo(postNo);
    }

    @Override
    public boolean modifyPost(Post p) {
        return mapper.updatePost(p);
    }

    @Override
    public boolean removePost(int postNo) {
        return mapper.deletePost(postNo);
    }
}
