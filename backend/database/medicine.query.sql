USE pastilla;

CREATE TABLE medicine(
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    description MEDIUMTEXT NOT NULL,
    id_ctlg_sales INT(11),
    id_ctlg_recipe INT(11),
    id_ctlg_symptom INT(11),
    id_ctlg_state_matter INT(11),
    id_ctlg_pharmaceutical_forms INT(11),
    id_ctlg_type_pharma INT(11),
    create_ timestamp NOT NULL DEFAULT current_timestamp,
    update_ timestamp NOT NULL DEFAULT current_timestamp ON UPDATE CURRENT_TIMESTAMP,
    delete_ timestamp NOT NULL DEFAULT current_timestamp,
    PRIMARY KEY (id),
    FOREIGN KEY (id_ctlg_sales) REFERENCES ctlg_sales(id),
    FOREIGN KEY (id_ctlg_recipe) REFERENCES ctlg_recipe(id),
    FOREIGN KEY (id_ctlg_symptom) REFERENCES ctlg_symptom(id),
    FOREIGN KEY (id_ctlg_state_matter) REFERENCES ctlg_state_matter(id),
    FOREIGN KEY (id_ctlg_pharmaceutical_forms) REFERENCES ctlg_pharmaceutical_forms(id),
    FOREIGN KEY (id_ctlg_type_pharma) REFERENCES ctlg_type_pharma(id)
);
