package com.ssafy.SNS201.service;

import com.ssafy.SNS201.dto.Member;

import java.util.List;

public interface MemberService {
    public List<Member> findAllMembers();
    public Member findMemberByNo(int memberNo);
    public boolean addMember(Member member);
    public boolean modifyMember(Member member);
    public boolean removeMember(int memberNo);
}
