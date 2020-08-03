package com.ssafy.SNS201.mapper;

import com.ssafy.SNS201.dto.Member;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface MemberMapper {
    public List<Member> selectMember();
    public Member selectMemberByNo(int memberNo);
    public boolean insertMember(Member member);
    public boolean updateMember(Member member);
    public boolean deleteMember(int memberNo);
}
