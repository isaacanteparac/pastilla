USE pastilla;

CREATE TABLE doctor_info (
    id INT(11) NOT NULL AUTO_INCREMENT,
    id_user INT(11),
    description VARCHAR(255) NOT NULL,
    phone VARCHAR(13) NOT NULL,
    id_ctlg_doctor_specialty INT(11),
    create_ timestamp NOT NULL DEFAULT current_timestamp,
    update_ timestamp NOT NULL DEFAULT current_timestamp ON UPDATE CURRENT_TIMESTAMP,
    delete_ timestamp NOT NULL DEFAULT current_timestamp,
    PRIMARY KEY (id),
    FOREIGN KEY (id_user) REFERENCES user(id),
    FOREIGN KEY (id_ctlg_doctor_specialty) REFERENCES ctlg_doctor_specialtyer(id)
);

//ginecologo //dermatologo //psiquiatra 