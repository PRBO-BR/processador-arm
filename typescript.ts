vsim -gui ab_work_trabalho.testbench
add wave -position end  sim:/testbench/dut/arm/clk
add wave -position end  sim:/testbench/dut/arm/Instr
add wave -position end sim:/testbench/dut/arm/ALUControl
add wave -position end  sim:/testbench/dut/arm/dp/rf/r15
add wave -position end  sim:/testbench/dut/arm/dp/rf/rf
add wave -position end  sim:/testbench/dut/arm/dp/alu/a
add wave -position end  sim:/testbench/dut/arm/dp/alu/b
add wave -position end  sim:/testbench/dut/arm/ALUResult
add wave -position end  sim:/testbench/dut/arm/ALUFlags
add wave -position end  sim:/testbench/dut/arm/c/cl/Flags
run