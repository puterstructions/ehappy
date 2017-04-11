#include "happysettings.h"
#include "ui_happysettings.h"

HappySettings::HappySettings(QWidget *parent) :
    QDialog(parent),
    ui(new Ui::HappySettings)
{
    ui->setupUi(this);
}

HappySettings::~HappySettings()
{
    delete ui;
}
