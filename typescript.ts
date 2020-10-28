vsim -gui ab_work_trabalho.testbench
add wave -position end  sim:/testbench/dut/arm/clk
add wave -position end  sim:/testbench/dut/reset
add wave -position end  sim:/testbench/dut/PC
add wave -position end  sim:/testbench/dut/arm/Instr
add wave -position end  sim:/testbench/dut/arm/dp/alu/a
add wave -position end  sim:/testbench/dut/arm/dp/alu/b
add wave -position end  sim:/testbench/dut/arm/c/dec/Branch
add wave -position end  sim:/testbench/dut/arm/ALUResult
add wave -position end  sim:/testbench/dut/arm/c/cl/Flags
add wave -position end  sim:/testbench/dut/arm/c/cl/CondEx
add wave -position end  sim:/testbench/dut/arm/WriteData
add wave -position end  sim:/testbench/dut/arm/MemWrite
add wave -position 10  sim:/testbench/dut/arm/ReadData
add wave -position end  sim:/testbench/dut/arm/Instr
add wave -position end  sim:/testbench/dut/arm/dp/rf/rf
add wave -position end  sim:/testbench/dut/arm/dp/alu/a
add wave -position end  sim:/testbench/dut/arm/dp/alu/b
add wave -position end  sim:/testbench/dut/arm/ALUResult
add wave -position end  sim:/testbench/dut/arm/ALUFlags
add wave -position end  sim:/testbench/dut/arm/c/cl/Flags
add wave -position end  sim:/testbench/dut/imem/RAM
add wave -position end  sim:/testbench/dut/dmem/RAM

run

SUB R4, R15, R15
ADD R5, R4, #0
ADD R4, R4, #10
ADD R5, R5, #5
AND R6, R4, R5
ORR R7, R4, R5
SUB R8, R4, R5
EOR R9, R4, R5
TST R4, R5
CMP R4, R5
LSL R12, R4, #7