package com.ssafy.SNS201.controller;

import com.ssafy.SNS201.dto.Entry;
import com.ssafy.SNS201.dto.Follow;
import com.ssafy.SNS201.service.EntryService;
import com.ssafy.SNS201.service.FollowService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@CrossOrigin(origins = {"*"}, maxAge = 6000)
@RestController
@RequestMapping("/follow")
@Api(value="SSAFY")
public class FollowAPIController {

    public static final Logger logger = LoggerFactory.getLogger(FollowAPIController.class);

    @Autowired
    private FollowService followService;


    @ApiOperation(value = "모든 팔로워의 정보를 반환한다.", response = List.class)
    @GetMapping("/all/follower")
    public ResponseEntity<List<Follow>> findAllFollowMe() throws Exception {
        logger.info("1-------------findAllFollowMe-----------------------------"+new Date());
        List<Follow> follows = followService.findAllFollowMe();
        if (follows.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<Follow>>(follows, HttpStatus.OK);
    }


    @ApiOperation(value = "모든 팔로잉의 정보를 반환한다.", response = List.class)
    @GetMapping("/all/following")
    public ResponseEntity<List<Follow>> findAllFollowYou() throws Exception {
        logger.info("1-------------findAllFollowYou-----------------------------"+new Date());
        List<Follow> follows = followService.findAllFollowYou();
        if (follows.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<Follow>>(follows, HttpStatus.OK);
    }

    @ApiOperation(value = " 새로운 사용자를 팔로우한다. 그리고 그 사용자의 번호를 반환한다.", response = String.class)
    @PostMapping()
    public ResponseEntity<String> addFollow(@RequestBody Follow follow) throws Exception {
        logger.info("5-------------addFollow-----------------------------" + follow);
        if(followService.addFollow(follow)) return new ResponseEntity<String>("success", HttpStatus.OK);
        else return new ResponseEntity<String>("fail", HttpStatus.OK);
    }

    @ApiOperation(value = " 해당 사용자를 언팔로우한다.", response = String.class)
    @DeleteMapping("/{followNo}")
    public ResponseEntity<String> removeFollow(@PathVariable int followNo) throws Exception {
        logger.info("1-------------removeFollow-----------------------------" + followNo);
        if (followService.removeFollow(followNo)) {
            return new ResponseEntity<String>("success", HttpStatus.OK);
        }
        return new ResponseEntity<String>("fail",HttpStatus.NO_CONTENT);
    }
}
