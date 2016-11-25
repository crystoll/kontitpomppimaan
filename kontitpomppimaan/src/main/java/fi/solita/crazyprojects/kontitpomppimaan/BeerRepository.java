package fi.solita.crazyprojects.kontitpomppimaan;

import org.springframework.data.jpa.repository.JpaRepository;

public interface BeerRepository extends JpaRepository<BeerEntity, Long> {
}
