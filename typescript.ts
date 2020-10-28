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
add wave -position end  sim:/testbench/dut/arm/ReadData
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

//Implementação do LSL
//SUB R4, R15, R15	E04F400F
//ADD R5, R4, #0	E2845000
//ADD R3, R4, #10	E284300A
//STR R3, [R5, #4]	E5853004
//LDR R4, [R5, #4]	E5954004
//ADD R5, R5, #5	E2855005
//AND R6, R4, R5	E0046005
//ORR R7, R4, R5	E1847005
//SUB R8, R4, R5	E0448005
//EOR R9, R4, R5	E0249005
//TST R4, R5		E1140005
//CMP R4, R5		E1540005
//LSL R12, R4, #7	E1A0C384