airquality
airquality$Month = factor(airquality$Month)
airquality$Day = factor(airquality$Day)
summary(airquality)

hist(airquality$Wind)
hist(airquality$Solar.R)
