package fi.solita.crazyprojects.kontitpomppimaan;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.*;

@Transactional
@RestController
@RequestMapping(value = "/api/beers")
public class BeerController {

    @Autowired
    private BeerRepository beerRepository;

    @RequestMapping(method = GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public List<BeerEntity> getAllBeers() {
        return beerRepository.findAll();
    }

    @RequestMapping(method = GET, value = "{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public BeerEntity getOneBeer(@PathVariable(name = "id") long beerId) {
        return beerRepository.findOne(beerId);
    }


    @RequestMapping(method = POST,
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public BeerEntity saveYourBeer(@RequestBody BeerEntity beerEntity) {
        return beerRepository.save(beerEntity);
    }

    @RequestMapping(method = PUT,
            value="{id}",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public BeerEntity updateYourBeer(@PathVariable(name="id") long id, @RequestBody BeerEntity beerEntity) {
        if (id != beerEntity.id) throw new IllegalArgumentException("id param did not match id in updated content");
        return beerRepository.save(beerEntity);
    }


    @RequestMapping(method = DELETE, value = "{id}")
    public void killThatBeer(@PathVariable(name = "id") long beerId) {
        beerRepository.delete(beerId);
    }

}
