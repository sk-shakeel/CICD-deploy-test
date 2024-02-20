package com.example.ramp.entity;

import com.example.ramp.types.Status;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;

@Entity
@Table(name = "payments")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "vendor_name")
    private String vendorName;

    @Column(name = "payment_type")
    private String paymentType;

    @Enumerated(EnumType.STRING)
    @Column(name = "status")
    private Status status;

    @Column(name = "payment_date")
    private Date paymentDate;

    @Column(name = "due_date")
    private Date dueDate;

    @Column(name = "invoice_date")
    private Date invoiceDate;

    @Column(name = "invoice_no")
    private String invoiceNo;

    @Column(name = "quickbooks_location")
    private String quickbooksLocation;

    @Column(name = "from_acc_no")
    private Double fromAccNo;

    @Column(name = "to_acc_no")
    private Double toAccNo;

    @Column(name = "send_date")
    private Date sendDate;

    @Column(name = "recieve_date")
    private Date recieveDate;

    @Column(name = "amount")
    private BigDecimal amount;

    @Column(name = "vendor_contact")
    private String vendorContact;
}
