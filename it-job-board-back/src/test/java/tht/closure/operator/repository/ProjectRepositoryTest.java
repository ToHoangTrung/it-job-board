package tht.closure.operator.repository;

import java.time.LocalDate;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import com.querydsl.jpa.impl.JPAQuery;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;

import tht.closure.operator.model.entity.QProject;
import tht.closure.operator.ApplicationWebConfig;

@ContextConfiguration(classes = {ApplicationWebConfig.class})
@RunWith(value=SpringRunner.class)
public class ProjectRepositoryTest {
    @PersistenceContext
    private EntityManager em;
    @Autowired
    private ProjectRepository projectRepository;

    @Test
    public void testCountAll() {
        projectRepository.save(new Project("KSTA", LocalDate.now()));
        projectRepository.save(new Project("LAGAPEO", LocalDate.now()));
        projectRepository.save(new Project("ZHQUEST", LocalDate.now()));
        projectRepository.save(new Project("SECUTIX", LocalDate.now()));
        Assert.assertEquals(9, projectRepository.count());
    }

    @Test
    public void testFindOneWithQueryDSL() {
        final String PROJECT_NAME = "KSTA";
        projectRepository.save(new Project(PROJECT_NAME, LocalDate.now()));
        Project project = new JPAQuery<Project>(em)
                .from(QProject.project)
                .where(QProject.project.name.eq(PROJECT_NAME))
                .fetchFirst();
        Assert.assertEquals(PROJECT_NAME, project.getName());
    }
}
