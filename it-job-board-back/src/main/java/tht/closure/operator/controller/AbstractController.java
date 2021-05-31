package tht.closure.operator.controller;

import org.springframework.beans.factory.annotation.Autowired;
import tht.closure.operator.util.ApplicationMapper;

public abstract class AbstractController {
    @Autowired
    ApplicationMapper mapper;
}
