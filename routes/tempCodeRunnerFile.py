for i in range(25):
    conductor = Conductor(
        C_id=i+1,
        C_name=f"Conductor {i+1}",
        salary=choice([20000, 25000, 25000, 35000, 40000]),
        working_shift=choice(["Morning", "Afternoon", "Night"])
    )
    conductor.save()