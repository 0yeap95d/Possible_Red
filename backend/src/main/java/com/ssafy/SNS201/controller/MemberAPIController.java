package com.ssafy.SNS201.controller;
import java.util.Date;
import java.util.List;

import com.ssafy.SNS201.dto.Member;
import com.ssafy.SNS201.service.MemberService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.ApiOperation;

@CrossOrigin(origins = {"*"}, maxAge = 6000)
@RestController
@RequestMapping("/member")
public class MemberAPIController {

    public static final Logger logger = LoggerFactory.getLogger(MemberAPIController.class);
    private static final String SUCCESS = "success";
    private static final String FAIL = "fail";

    @Autowired
    private MemberService memberService;

    @ApiOperation(value = "모든 사용자의 정보를 반환한다.", response = List.class)
    @GetMapping("all")
    public ResponseEntity<List<Member>> findAllMembers() throws Exception {
        logger.info("findAllMembers | " + new Date());
        List<Member> members = memberService.findAllMembers();
        if (members.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<Member>>(members, HttpStatus.OK);
    }

    @ApiOperation(value = "사용자의 상세 정보를 반환한다.", response = Member.class)
    @GetMapping("{memberNo}")
    public ResponseEntity<Member> findMember(@PathVariable int memberNo) throws Exception {
        logger.info("findMember | " + memberNo);
        return new ResponseEntity<Member>(
                memberService.findMemberByNo(memberNo), HttpStatus.OK
        );
    }

    @ApiOperation(value = "이메일이 일치하는 사용자의 번호를 반환한다.", response = Member.class)
    @GetMapping("email/{email}")
    public ResponseEntity<Member> findMemberByEmail(@PathVariable String email) throws Exception {
        logger.info("findMemberByEmail | " + email);
        return new ResponseEntity<Member>(
                memberService.findMemberByEmail(email), HttpStatus.OK
        );
    }

    @ApiOperation(value = " 새로운 사용자의 정보를 입력한다.", response = String.class)
    @PostMapping
    public ResponseEntity<String> addMember(@RequestBody Member member) throws Exception {
        logger.info("addMember | " + member);
        if(memberService.addMember(member)) {
            return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
        }
        else return new ResponseEntity<String>(FAIL, HttpStatus.OK);
    }

    @ApiOperation(value = " 사용자의 정보를 수정한다.", response = String.class)
    @PutMapping
    public ResponseEntity<String> modifyMember(@RequestBody Member member) throws Exception {
        logger.info("modifyMember | " + member);
        if (memberService.modifyMember(member)) {
            return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
        }
        return new ResponseEntity<String>(FAIL,HttpStatus.NO_CONTENT);
    }

    @ApiOperation(value = " 해당 사용자의 정보를 삭제한다.", response = String.class)
    @DeleteMapping("{memberNo}")
    public ResponseEntity<String> removeMember(@PathVariable int memberNo) throws Exception {
        logger.info("removeMember | " + memberNo);
        if (memberService.removeMember(memberNo)) {
            return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
        }
        return new ResponseEntity<String>(FAIL,HttpStatus.NO_CONTENT);
    }
}
