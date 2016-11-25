package fi.solita.crazyprojects.kontitpomppimaan;

import javax.persistence.*;

@Entity
@Table(name="beers")
public class BeerEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public Long id;
    public String brand;
    public String quantity;
    public String rating;

    public BeerEntity() {
    }

    public BeerEntity(String brand, String quantity, String rating) {
        this.brand = brand;
        this.quantity = quantity;
        this.rating = rating;
    }
    
}
