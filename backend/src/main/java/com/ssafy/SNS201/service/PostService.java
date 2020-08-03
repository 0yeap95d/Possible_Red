package com.ssafy.SNS201.service;

import com.ssafy.SNS201.dto.Post;

import java.util.List;

public interface PostService {
    List<Post> findAllPosts();
    boolean addPost(Post p);
    Post findPostByNo(int postNo);
    boolean modifyPost(Post p);
    boolean removePost(int postNo);
}
