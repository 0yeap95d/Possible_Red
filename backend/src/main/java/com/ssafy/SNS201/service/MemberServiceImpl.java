package com.ssafy.SNS201.service;

import com.ssafy.SNS201.dto.Member;
import com.ssafy.SNS201.mapper.MemberMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class MemberServiceImpl implements MemberService {

    @Autowired
    private MemberMapper mapper;

    @Override
    public List<Member> findAllMembers() {
        return mapper.selectMember();
    }

    @Override
    public Member findMemberByNo(int memberNo) {
        return mapper.selectMemberByNo(memberNo);
    }

    @Override
    public Member findMemberByEmail(String email) {
        return mapper.selectMemberByEmail(email);
    }

    @Override
    public boolean addMember(Member member) { return mapper.insertMember(member); }

    @Override
    @Transactional
    public boolean modifyMember(Member member) { return mapper.updateMember(member); }

    @Override
    @Transactional
    public boolean removeMember(int memberNo) {
        return mapper.deleteMember(memberNo);
    }
}
