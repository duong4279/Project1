package stackjava.com.mongodb.controller;
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
import stackjava.com.mongodb.entities.Customer;
import stackjava.com.mongodb.service.CustomerService;
import stackjava.com.mongodb.service.ServiceResult;
@RestController
@RequestMapping("/api/v1")
public class CustomerController {
	@Autowired
	private CustomerService customerService;
	/* ---------------- GET ALL CUSTOMER ------------------------ */
	@CrossOrigin(origins = "*")
	@GetMapping("/students")
	public ResponseEntity<ServiceResult> findAllCustomer() {
		return new ResponseEntity<ServiceResult>(customerService.findAll(), HttpStatus.OK);
	}
	/* ---------------- GET CUSTOMER BY ID ------------------------ */
	@CrossOrigin(origins = "*")
	@GetMapping("/students/{id}")
	public ResponseEntity<ServiceResult> findById(@PathVariable String id) {
		return new ResponseEntity<ServiceResult>(customerService.findById(id), HttpStatus.OK);
	}
	/* ---------------- CREATE NEW CUSTOMER ------------------------ */
	@CrossOrigin(origins = "*")
	@PostMapping("/students")
	public ResponseEntity<ServiceResult> create(@RequestBody Customer customer) {
		return new ResponseEntity<ServiceResult>(customerService.create(customer), HttpStatus.OK);
	}	
	/* ---------------- UPDATE CUSTOMER ------------------------ */
	@CrossOrigin(origins = "*")
	@PutMapping("/students/{id}")
	public ResponseEntity<ServiceResult> update(@RequestBody Customer customer,@PathVariable String id) {
		
		return new ResponseEntity<ServiceResult>(customerService.update(customer), HttpStatus.OK);
	}
	@CrossOrigin(origins = "*")
	@DeleteMapping("/students/{id}")
	public ResponseEntity<ServiceResult> delete(@PathVariable String id) {
		return new ResponseEntity<ServiceResult>(customerService.delete(id), HttpStatus.OK);
		
	}

}
