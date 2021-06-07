package tht.closure.operator.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tht.closure.operator.model.dto.CatalogDto;
import tht.closure.operator.model.dto.SubCatalogDto;
import tht.closure.operator.service.CatalogService;

import java.util.List;

@RestController
@RequestMapping("/api/catalog")
public class CatalogController extends AbstractController {

    @Autowired
    private CatalogService catalogService;

    @GetMapping("/main")
    public ResponseEntity<Object> getAllCatalogAndTheirSubCatalog() {
        List<CatalogDto> catalogs = catalogService.getALlCatalogAndTheirSubCatalog();
        return ResponseEntity.accepted().body(catalogs);
    }

    @GetMapping("/sub")
    public ResponseEntity<Object> getAllSubCatalog() {
        List<SubCatalogDto> catalogs = catalogService.getAllSubCatalog();
        return ResponseEntity.accepted().body(catalogs);
    }
}
