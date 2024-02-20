package com.example.ramp.dto;

import com.example.ramp.types.PaymentStatus;
import com.example.ramp.types.Vendor;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PaymentDto {

    private int id;
    private Vendor vendor;
    private PaymentStatus paymentStatus;
    private Date paymentDate;
    private Date invoiceDate;
    private Date dueDate;
}
