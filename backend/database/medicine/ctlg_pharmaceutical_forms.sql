USE pastilla;

CREATE TABLE ctlg_pharmaceutical_forms(
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    create_  timestamp NOT NULL DEFAULT current_timestamp,
    update_ timestamp NOT NULL DEFAULT current_timestamp ON UPDATE CURRENT_TIMESTAMP,
    delete_  timestamp NOT NULL DEFAULT current_timestamp,
    PRIMARY KEY (id)
);

//orales
//nasales
//vaginales
//parentales
//irrigacion
//inhalacion
//oftalmicas
//rectales
//cutaneas

